import { ethers, upgrades } from "hardhat";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { US_HEX, signKYC, signVoucher } from "./lib";
import { MockERC20, TestableMarketplaceV3 } from "../typechain-types";

type Fixture = {
    provider: SignerWithAddress,
    providersSigner: SignerWithAddress,
    user: SignerWithAddress,
    admin: SignerWithAddress,
    anotherUser: SignerWithAddress,
    kycSigner: SignerWithAddress,
}

export type MarketplaceFixture = Fixture & {
    marketplace: TestableMarketplaceV3,
    token: MockERC20
}

// export type FiatMarketplaceFixture = Fixture & {
//     marketplace: FiatMarketplaceV3,
//     voucherSigner: SignerWithAddress,
// }

export const DEFAULT_USER_BALANCE = 10000000

// export async function deployFiatMarketplaceFixture(): Promise<FiatMarketplaceFixture> {
//     const [admin, provider, user, anotherUser, providersSigner, voucherSigner, kycSigner] = await ethers.getSigners();

//     const Marketplace = await ethers.getContractFactory("FiatMarketplace");
//     const marketplace = await upgrades.deployProxy(Marketplace, ["0x0000000000000000000000000000000000000000"]) as FiatMarketplace;

//     await marketplace.connect(admin).setVoucherSigner(voucherSigner.address)

//     await marketplace.connect(admin).registerFiatProvider(provider.address)
//     await marketplace.connect(provider).setSigner(providersSigner.address)

//     //transfer some tokens to user
//     const voucher = { amount: DEFAULT_USER_BALANCE, paymentId: ethers.utils.formatBytes32String("fixtue2") }
//     const signature = await signVoucher(voucherSigner, voucher, marketplace.address)
//     await marketplace.connect(anotherUser).claimVoucher(voucher, signature, user.address)

//     return { marketplace, provider, user, admin, anotherUser, providersSigner, voucherSigner, kycSigner };
// }

export async function deployMarketplaceFixture(): Promise<MarketplaceFixture> {
    const [admin, provider, user, anotherUser, providersSigner, kycSigner] = await ethers.getSigners();

    const MockERC20 = await ethers.getContractFactory("MockERC20");
    const token = await MockERC20.connect(admin).deploy('10000000000000000000000');

    const Marketplace = await ethers.getContractFactory("TestableMarketplaceV3");
    const marketplace = await upgrades.deployProxy(Marketplace, [token.address]) as TestableMarketplaceV3;

    //KYC quirks
    await marketplace.connect(admin).allowProviderCountry(US_HEX)
    await marketplace.connect(admin).allowUserCountry(US_HEX)
    await marketplace.connect(admin).setKYCSigner(kycSigner.address)

    //KYC user, admin and provider
    await marketplace.connect(admin).submitKYC(
        admin.address,
        US_HEX,
        await signKYC(admin.address, US_HEX, kycSigner)
    )

    await marketplace.connect(provider).submitKYC(
        provider.address,
        US_HEX,
        await signKYC(provider.address, US_HEX, kycSigner)
    )

    await marketplace.connect(user).submitKYC(
        user.address,
        US_HEX,
        await signKYC(user.address, US_HEX, kycSigner)
    )

    //register provider
    await marketplace.connect(provider).submitKYC(
        provider.address,
        US_HEX,
        await signKYC(provider.address, US_HEX, kycSigner)
    )

    //TODO: generate signature and set user KYC
    await marketplace.connect(admin).registerProviderByCommunity(provider.address)

    await marketplace.connect(provider).setSigner(providersSigner.address)

    //transfer some tokens to user
    await token.connect(admin).transfer(user.address, DEFAULT_USER_BALANCE)
    await token.connect(user).approve(marketplace.address, DEFAULT_USER_BALANCE)
    await marketplace.connect(user).depositCoin(DEFAULT_USER_BALANCE)

    return { marketplace, token, provider, user, admin, anotherUser, providersSigner, kycSigner };
}