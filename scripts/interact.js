const { PRIVATE_KEY, API_KEY, CONTRACT_ADDRESS } = process.env;

// Add the packages required
const { ethers } = require("hardhat");
// See that contract is taking the file from the artifacts folder
// So you need to compile the contract first
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
// How we are using ETH, we are going to use SEPOLIA network
const network = "sepolia";

// Setting up the ethers Alchemy provider
const provider = new ethers.AlchemyProvider(network, API_KEY);

// signer - you / me
const singer = new ethers.Wallet(PRIVATE_KEY, provider);

// Initialized the contract in ethers to interact with.
const helloWorldContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  singer
);

async function main() {
  // Get the current message in the contract
  const message = await helloWorldContract.message();
  console.log("the initial message is : ", message);

  // Update the message in the contract
  console.log("Updating the message...");
  const transaction = await helloWorldContract.updateMessage(
    "Updating the message from the functions attend 2"
  );

  // Wait for the transaction to be mined
  await transaction.wait();

  // Get the new message in the contract
  const newMessage = await helloWorldContract.message();
  console.log("The new message is : ", newMessage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
