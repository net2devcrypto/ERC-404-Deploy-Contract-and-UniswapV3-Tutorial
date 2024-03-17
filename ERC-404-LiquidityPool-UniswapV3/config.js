// READ the disclaimer.md file located in this folder before you continue!!!

const key = "0xPRIVATE_KEY"; // ONLY USE THE ERC-404 and FAKE USDT DEPLOYER WALLET!!!
const rpc = "RPC_ADDRESS"; // Find Available RPC Testnet Addresses: chainlist.org!
const chainID = 11155111; // Example Ethereum Sepolia Testnet

const usdtAddress = "FAKE_USDT_CONTRACT_ADDRESS"; // Liquidity Pool Token Contract
const erc404Address = "ERC-404_CONTRACT_ADDRESS"; // ERC-404 Token Contract

// https://docs.uniswap.org/contracts/v3/reference/deployments
const positionAddress = "POSITION_SMART_CONTRACT_ADDRESS"; // NonfungiblePositionManager Sepolia Address https://docs.uniswap.org/contracts/v3/reference/deployments
const factoryAddress = "FACTORY_SMART_CONTRACT_ADDRESS"; // UniswapV3Factory Sepolia Address https://docs.uniswap.org/contracts/v3/reference/deployments
const poolAddress = "SWAP_POOL_SMART_CONTRACT"   // Obtain the address after executing step1-deploy-pool.js then update here!
const poolFee = 10000;      // Set the Uniswap pool fee in basis points, example 10000 = 1%

/* 
The amount of ERC-404 transferred could be higher/lower depending on the price curve.
If you are transferring an aprox 35 ERC-404 tokens, add an aprox 25-35% extra overhead of USDT:

 erc404Liquidity * erc404price = usdtLiquidity
 35 * 300 = 10500
 Add an extra 3500 usdt to compensate the price curve.
 example = 10500 + 3500
 usdtLiquidity = 14000
*/

let erc404price = 300;     // Price per ERC-404 Token in USDT
let usdtLiquidity = 14000;    // Amount of Fake USDT Tokens to deposit in pool + extra overhead for price curve.
let erc404Liquidity = 35;    // Amount of ERC-404 - NFTs in pool.

/*
IMPORTANT:

THE PRIVATE KEY PROVIDED IN THIS CONFIG.JS FILE IS THE OWNER (DEPLOYER) WALLET OF BOTH ERC404 and FAKE USDT CONTRACTS.
IT MUST HAVE BOTH ERC-404 and FAKE USDT LIQUIDITY AMOUNTS SPECIFIED AVAILABLE BEFORE CONTINUING.
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
    usdtLiquidity,
    erc404Liquidity,
    factoryAddress,
    chainID
};
