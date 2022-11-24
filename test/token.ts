import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        console.log(ownerBalance)
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
});