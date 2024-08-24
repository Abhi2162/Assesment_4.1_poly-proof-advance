async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Abhinesh = await ethers.getContractFactory("Abhinesh");
    const abhinesh = await Abhinesh.deploy();
    await abhinesh.waitForDeployment();

    console.log("Abhinesh deployed to:", await abhinesh.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
