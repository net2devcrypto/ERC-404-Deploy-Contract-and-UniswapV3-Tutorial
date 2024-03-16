// READ the disclaimer.md file located in this folder before you continue!!!

const key = "DEPLOYER_WALLET_PRIVATE_KEY"; // USE A WALLET ONLY WITH TESTNET TOKENS!!!
const rpc = "RPC_ADDRESS";
const chainID = 11155111; // Example Ethereum Sepolia Testnet

const usdtAddress = "FAKE_USDT_TOKEN_CONTRACT_ADDRESS"; //token0
const erc404Address = "ERC-404-TOKEN_CONTRACT_ADDRESS"; //token1

const positionAddress = "ENTER_POSITION_CONTRACT_ADDRESS"; // Find 
const factoryAddress = "POOL_FACTORY_SMART_CONTRACT_ADDRESS";
const poolAddress = "ENTER_POOL_SMART_CONTRACT_ADDRESS"       // Obtain the address after executing step1-deploy-pool.js
const poolFee = 10000;      // Sets the pool in basis points, example 10000 = 1%
let erc404price = 300;     // Price per ERC-404 Token in USDT
let erc404Amount = 100;    // Amount of ERC-404 Tokens to deposit in Pool
let usdtAmount = 30000;    // Amount of Fake USDT to deposit in Pool

/* 
To Confirm the Price per token to the Pool deposit amount:

 usdtAmount / erc404Amount = erc404price
 30000 / 100 = 300 USDT Per ERC-404

*/

module.exports = { 
    key,
    rpc,
    erc404Address,
    usdtAddress,
    positionAddress,
    poolAddress,
    poolFee,
    erc404price,
    erc404Amount,
    usdtAmount,
    factoryAddress,
    chainID
};
