import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { deployBrokerFixture } from './fixtures'

describe("BrokerV1_coin", function () {

    describe("DepositCoin", function () {
        it("should incrase balance", async function () {
            const { broker, token, miner, user } = await loadFixture(deployBrokerFixture);

            await broker.SetCommunityContract(miner.address)
            await broker.SetCoinAddress(token.address)

            const amount = ethers.utils.parseUnits('5', 'mwei')
            await token.transfer(user.address, amount)
            await token.connect(user).approve(broker.address, amount)
            const allowance = await token.allowance(user.address, broker.address)

            await broker.connect(user).DepositCoin(allowance)

            const [locked, free] = await broker.GetCoinBalance(user.address)
            const total = free.add(locked)
            const balance = ethers.utils.formatUnits(total, 'mwei')
            const equal = ethers.utils.formatUnits(amount, 'mwei')

            expect(balance).is.equal(equal)
        });
        it("should revert if transfer fails");
    })
    describe("GetLockedCoinBalance", function () {
        it("should increase with vm booking");
        it("should decrease with vm termination");
    })
    describe("WithdrawCoin", function () {
        it("should withdraw only free balance");
        it("should revert if transfer fails");
        it("should revert if not enough balance");
    })
    describe("GetCoinBalance", function () {
        it("should return locked and free balance", async function () {
            const { broker, miner, user, token } = await loadFixture(deployBrokerFixture);

            const balance = await broker.GetCoinBalance(user.address)
            console.log(balance)
        });
    })
    describe("SetCoinAddress", function () {
        it("should set coin address");
        it("should revert if not owner");
    })
});
