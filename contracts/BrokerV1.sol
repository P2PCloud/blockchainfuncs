// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

interface IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 amount) external returns (bool);

    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function decimals() external view returns (uint8);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

//TODO: try rearranging fields to optimize gas usage

contract BrokerV1 {
    struct Booking {
        uint64 index; //TODO: change all indexes to uint24
        uint64 vmTypeId; //TODO: change vm type id to uint24
        address miner;
        address user;
        uint64 pricePerSecond; //TODO: change pps to uint24
        uint256 bookedAt; //TODO: change timestamp to uint48
        uint256 lastPayment; //TODO: change timestamp to uint48
        uint64 offerIndex; //TODO: change all indexes to uint24
    }

    //TODO: try rearranging fields to optimize gas usage
    struct Offer {
        uint64 index; //TODO: change all indexes to uint24
        address miner;
        uint64 pricePerSecond; //TODO: change pps to uint24
        uint64 machinesAvailable; //TODO: change to uint16
        uint64 vmTypeId; //TODO: change all indexes to uint24
        bytes32 specsIpfsHash;
    }

    //TODO: try optimizing into an array. will it save any gas?
    mapping(uint64 => Offer) offers; //TODO: change all indexes to uint24
    uint64 nextVmOfferId;

    //TODO: try optimizing into an array. will it save any gas?
    mapping(uint64 => Booking) bookings; //TODO: change all indexes to uint24
    uint64 nextBookingId;

    //TODO: change all indexes to uint24
    mapping(address => uint256) coinBalance;

    //TODO: change user total pps to uint32 (uint 24 maxes out on $43m/month)
    mapping(address => uint64) userTotalPps;

    mapping(address => bytes32) minerUrls;

    IERC20 public coin;

    address public communityContract;
    uint64 public communityFee; //TODO: change to uint16

    uint64 public constant SECONDS_IN_WEEK = 604800;

    event Payment(address indexed user, address indexed miner, uint256 amount);

    event Complaint(
        address indexed user,
        address indexed miner,
        uint8 indexed reason
    );

    //01_miner_url

    function SetMinerUrl(bytes32 url) public {
        minerUrls[msg.sender] = url;
    }

    function GetMinerUrl(address _user) public view returns (bytes32) {
        return minerUrls[_user];
    }

    //02_offers

    function AddOffer(
        uint64 pricePerSecond,
        uint64 machinesAvailable,
        bytes32 specsIpfsHash
    ) public returns (uint64) {
        offers[nextVmOfferId] = Offer(
            nextVmOfferId,
            msg.sender,
            pricePerSecond,
            machinesAvailable,
            0,
            specsIpfsHash
        );
        nextVmOfferId++;
        return nextVmOfferId - 1;
    }

    function UpdateOffer(
        uint64 offerIndex,
        uint64 machinesAvailable,
        uint64 pps
    ) public {
        require(
            offers[offerIndex].miner == msg.sender,
            "Only the owner can update an offer"
        );
        offers[offerIndex].machinesAvailable = machinesAvailable;
        offers[offerIndex].pricePerSecond = pps;
    }

    function RemoveOffer(uint64 offerIndex) public {
        require(
            offers[offerIndex].miner == msg.sender,
            "Only the owner can remove an offer"
        );
        delete offers[offerIndex];
    }

    function GetMinersOffers(
        address miner
    ) public view returns (Offer[] memory filteredOffers) {
        Offer[] memory offersTemp = new Offer[](nextVmOfferId);
        uint64 count;
        for (uint64 i = 0; i < nextVmOfferId; i++) {
            if (offers[i].miner == miner) {
                offersTemp[count] = offers[i];
                count += 1;
            }
        }

        filteredOffers = new Offer[](count);
        for (uint64 i = 0; i < count; i++) {
            filteredOffers[i] = offersTemp[i];
        }
    }

    function GetAvailableOffers()
        public
        view
        returns (Offer[] memory filteredOffers)
    {
        Offer[] memory offersTemp = new Offer[](nextVmOfferId);
        uint64 count;
        for (uint64 i = 0; i < nextVmOfferId; i++) {
            if (offers[i].machinesAvailable > 0) {
                offersTemp[count] = offers[i];
                count += 1;
            }
        }

        filteredOffers = new Offer[](count);
        for (uint64 i = 0; i < count; i++) {
            filteredOffers[i] = offersTemp[i];
        }
    }

    function GetOffer(
        uint64 index
    ) public view returns (Offer memory oneOffer) {
        oneOffer = offers[index];
    }

    //03_coin

    function SetCoinAddress(IERC20 newCoinAddress) public {
        require(
            msg.sender == communityContract,
            "only community contract can set coin"
        );

        coin = newCoinAddress;
    }

    function DepositCoin(uint256 numTokens) public returns (bool) {
        require(
            coin.transferFrom(msg.sender, address(this), numTokens),
            "Failed to transfer tokens"
        );

        coinBalance[msg.sender] = coinBalance[msg.sender] + numTokens;
        return true;
    }

    function GetLockedCoinBalance(address user) private view returns (uint256) {
        return userTotalPps[user] * SECONDS_IN_WEEK;
    }

    function WithdrawCoin(uint256 amt) public returns (bool) {
        uint256 freeBalance = coinBalance[msg.sender] -
            GetLockedCoinBalance(msg.sender);

        require(freeBalance >= amt, "Not enough balance to withdraw");

        require(coin.transfer(msg.sender, amt), "ERC20 transfer failed");

        coinBalance[msg.sender] -= amt;
        return true;
    }

    //TODO: needed named returns (uint256 free, uint256 locked) for true order in ABI compile
    function GetCoinBalance(
        address user
    ) public view returns (uint256, uint256) {
        // TODO: maybe need guard require( msg.sender == address )
        uint256 locked = GetLockedCoinBalance(user);
        return (coinBalance[user] - locked, locked);
    }

    //04_bookings

    function Book(uint64 offerIndex) public returns (uint64) {
        require(
            offers[offerIndex].machinesAvailable > 0,
            "No machines available"
        );

        uint256 willBeLocked = GetLockedCoinBalance(msg.sender) +
            offers[offerIndex].pricePerSecond *
            SECONDS_IN_WEEK;

        require(
            willBeLocked <= coinBalance[msg.sender],
            "You don't have enough balance to pay for this and all other Bookings for 7 days "
        );

        Booking memory booking = Booking(
            nextBookingId,
            0,
            offers[offerIndex].miner,
            msg.sender,
            offers[offerIndex].pricePerSecond,
            block.timestamp,
            block.timestamp,
            offerIndex
        );
        bookings[nextBookingId] = booking;
        nextBookingId++;

        userTotalPps[msg.sender] += offers[offerIndex].pricePerSecond;

        offers[offerIndex].machinesAvailable -= 1;

        return nextBookingId - 1;
    }

    function _executeBookingDelete(uint64 bookingId) private {
        offers[bookings[bookingId].offerIndex].machinesAvailable += 1;
        userTotalPps[bookings[bookingId].user] -= bookings[bookingId]
            .pricePerSecond;
        delete bookings[bookingId];
    }

    function Terminate(uint64 bookingId, uint8 reason) public {
        require(
            bookings[bookingId].user == msg.sender,
            "Only the user can stop a VM"
        );

        if (reason != 0) {
            emit Complaint(
                bookings[bookingId].user,
                bookings[bookingId].miner,
                reason
            );
        }

        _executeClaimPayment(bookingId);
        _executeBookingDelete(bookingId);
    }

    function ClaimPayment(uint64 bookingId) public {
        require(
            bookings[bookingId].miner == msg.sender,
            "Only the miner can claim a payment"
        );
        bool enoughMoney = _executeClaimPayment(bookingId);
        if (!enoughMoney) {
            _executeBookingDelete(bookingId);
        }
    }

    function _executeClaimPayment(uint64 bookingId) private returns (bool) {
        bool enoughMoney = true;
        uint256 timeUsed = block.timestamp - bookings[bookingId].lastPayment;

        uint256 totalPayout = timeUsed * bookings[bookingId].pricePerSecond;

        if (coinBalance[bookings[bookingId].user] < totalPayout) {
            totalPayout = coinBalance[bookings[bookingId].user];
            enoughMoney = false;
        }

        uint256 communityPayout = (totalPayout * communityFee) / (100 * 100);
        uint256 minerPayout = totalPayout - communityPayout;

        bookings[bookingId].lastPayment = block.timestamp;

        coinBalance[communityContract] += communityPayout;
        coinBalance[bookings[bookingId].miner] += minerPayout;
        coinBalance[bookings[bookingId].user] -= totalPayout;

        emit Payment(
            bookings[bookingId].user,
            bookings[bookingId].miner,
            minerPayout
        );
        return enoughMoney;
    }

    function FindBookingsByUser(
        address _owner
    ) public view returns (Booking[] memory filteredBookings) {
        Booking[] memory bookingsTemp = new Booking[](nextBookingId);
        uint64 count;
        for (uint64 i = 0; i < nextBookingId; i++) {
            if (bookings[i].user == _owner) {
                bookingsTemp[count] = bookings[i];
                count += 1;
            }
        }

        filteredBookings = new Booking[](count);
        for (uint64 i = 0; i < count; i++) {
            filteredBookings[i] = bookingsTemp[i];
        }
    }

    function FindBookingsByMiner(
        address _miner
    ) public view returns (Booking[] memory filteredBookings) {
        Booking[] memory bookingsTemp = new Booking[](nextBookingId);
        uint64 count;
        for (uint64 i = 0; i < nextBookingId; i++) {
            if (bookings[i].miner == _miner) {
                bookingsTemp[count] = bookings[i];
                count += 1;
            }
        }

        filteredBookings = new Booking[](count);
        for (uint64 i = 0; i < count; i++) {
            filteredBookings[i] = bookingsTemp[i];
        }
    }

    function GetBooking(
        uint64 index
    ) public view returns (Booking memory booking) {
        booking = bookings[index];
    }

    //05_community

    function SetCommunityContract(address newCommunityAddress) public {
        require(
            (msg.sender == communityContract) ||
                (communityContract == address(0)),
            "only community contract can set new community contract"
        );
        communityContract = newCommunityAddress;
    }

    function SetCommunityFee(uint64 fee) public returns (bool) {
        require(
            fee < 2500,
            "community fee should be in range of 0 (0%) to 2500 (25%)"
        );
        require(
            msg.sender == communityContract,
            "only community contract can set community fee"
        );

        communityFee = fee;
        return false;
    }

    // //TODO: compatibility layer. please remove after December 15th 2022
    // function getStablecoinAddress() public view returns (address) {
    //     return address(coin);
    // }

    // function GetStablecoinBalance(address user)
    //     public
    //     view
    //     returns (uint256, uint256)
    // {
    //     return GetCoinBalance(user);
    // }

    // function DepositStablecoin(uint256 numTokens) public returns (bool) {
    //     return DepositCoin(numTokens);
    // }

    // function WithdrawStablecoin(uint256 amt) public returns (bool) {
    //     return WithdrawCoin(amt);
    // }

    // function GetUsersBookings(address user)
    //     public
    //     view
    //     returns (Booking[] memory filteredBookings)
    // {
    //     return FindBookingsByUser(user);
    // }

    // function setMunerUrl(bytes32 url) public {
    //     SetMinerUrl(url);
    // }

    // function getMinerUrl(address _user) public view returns (bytes32) {
    //     return GetMinerUrl(_user);
    // }

    // function BookVM(uint64 offerIndex) public returns (uint64) {
    //     return Book(offerIndex);
    // }

    // function StopVM(uint64 bookingId, uint8 reason) public {
    //     Terminate(bookingId, reason);
    // }

    function GetTime() public view returns (uint256) {
        return block.timestamp;
    }

    //end of compatibility layer
}
