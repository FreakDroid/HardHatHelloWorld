# HardHat Demo

This project is a demo about how to use Ether.js, Hardhat and HardhatDeploy

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

You need to craete an App in https://dashboard.alchemy.com/

And you also need to create an account https://etherscan.io/login?cmd=last to get the **ETHERSCAN_API_KEY**

Remember that you need a Metamask wallet https://metamask.io/

```bash
API_URL=# Alchemy API
API_KEY=#Alchemy API Key
CONTRACT_ADDRESS= # Contract Address you know that when it is deployed
PRIVATE_KEY= # Wallet Private Key
ETHERSCAN_API_KEY= # Etherscan API Key
```

## Local installatioin

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

## Deployment

To deploy this project run.

```bash
  npx hardhat run scripts/deploy.js --network sepolia
```

After that we can interact with

```bash
  npx hardhat run scripts/interact.js --network sepolia
```

To verify the contracton Etherscan

```bash
  npx hardhat verify --constructor-args arguments.js YOUR_CONTRACT
```

Arguments.js

```bash
  module.exports = ["Hello, World!"];
```

**NOTE** Use the same word or phrases you used at scripts/deploy.js at line 6
