// READ the disclaimer.md file located in this folder before you continue!!!

const { factoryAbi, poolAbi } = require('./abis/uniswapabi.js');
const erc20Abi = require('./abis/erc20abi.json')
const erc404Abi = require('./abis/erc404abi.json')
const {approveTransfer, contractInt, getSigner, encodePriceSqrt, initializePool, createPool} = require('./interfaces');
const { erc404Address, usdtAddress, positionAddress, factoryAddress, poolFee, erc404Amount, erc404price, usdtAmount } = require('./config');

/*
Executing the function will open a liquidity pool and position 
with the following already provided values in config.js.
erc404price
erc404amount
usdtamount
poolFee

Provide all required values in the config.js file.
Watch Part 3 Video if you are unsure:
https://www.youtube.com/playlist?list=PLLkrq2VBYc1ZTGE4wTlff2vczjn-YSUan

Make sure to save changes in config.js file = CTRL + S

Once ready, run:
node step1-deploy-pool.js
*/

async function deployPool() {
    let signer = await getSigner();
    await approveTransfer(usdtAmount, erc404Amount, usdtAddress, erc404Address, positionAddress, erc20Abi, erc404Abi, signer.address);
    let factory = await contractInt(factoryAddress, factoryAbi);
    let poolAddress = await factory.getPool(usdtAddress, erc404Address, poolFee);
    let price = encodePriceSqrt(erc404price, 1);
    if (poolAddress === '0x0000000000000000000000000000000000000000') {
        console.log("Creating Pool...");
        poolAddress = await createPool(factory, usdtAddress, erc404Address, poolFee);
        await initializePool(poolAddress, price, signer, poolAbi);
    }

}

deployPool()
