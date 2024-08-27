const { ethers } = require("hardhat");

async function checkBalance() {
    const [deployer] = await ethers.getSigners();
    const nftAddress = "0xfb0201a809eb39772a60ec9fb6a8e7c472456d70";
    const Abhinesh = await ethers.getContractAt("Abhinesh", nftAddress);

    const balance = await Abhinesh.balanceOf(deployer.address);
    console.log(`NFT balance on Amoy: ${balance.toString()}`);
}

checkBalance()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
