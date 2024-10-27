async function main() {
  // Get the contract to deploy. The contract should be placed at contracts folder.
  const helloWorld = await ethers.getContractFactory("HelloWorld");

  // Deploy the contract. If the contract needs arguments in the contructor, pass them as arguments in the deploy function.
  const contract = await helloWorld.deploy("Hello, World!");

  // Get the address of the contract deployed.
  const myContractDeployedAddress = await contract.getAddress();

  // Display the address in the console.log
  console.log("Contract deployed to address:", myContractDeployedAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
