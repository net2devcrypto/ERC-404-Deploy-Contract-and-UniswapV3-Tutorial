// READ the disclaimer.md file located in this folder before you continue!!!

const { ethers } = require('ethers');
const { key, rpc } = require('./config');
const { encodeSqrtRatioX96 } = require("@uniswap/v3-sdk");

async function getSigner() {
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const signer = new ethers.Wallet(key, provider);
    return signer;
}

async function contractInt(address, abi) {
    const signer = await getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    return contract;
}

function encodePriceSqrt(token1Price, token0Price) {
    return encodeSqrtRatioX96(token1Price, token0Price);
}

async function getPoolData(poolContract) {
    const liquidity = await poolContract.liquidity();
    const slot = await poolContract.slot0();
    const PoolData = {
        liquidity,
        sqrtPriceX96: slot[0],
        tick: slot[1],
        observationIndex: slot[2],
        observationCardinality: slot[3],
        observationCardinalityNext: slot[4],
        feeProtocol: slot[5],
        unlocked: slot[6],
    };
    return PoolData;
}

async function approveTransfer(amount0, amount1, token0Address, token1Address, positionAddress, erc20Abi, erc404Abi, signer) {
    let weiAmount0 = await convertToWei(amount0);
    let weiAmount1 = await convertToWei(amount1);
    let usdt = await contractInt(token0Address, erc20Abi);
    let erc404 = await contractInt(token1Address, erc404Abi);
    await usdt.approve(positionAddress, weiAmount0);
    await erc404.approve(positionAddress, weiAmount1);
    await erc404.setApprovalForAll(positionAddress, true);
    console.log('Tokens Approved for Uniswap Position!')
}

async function createPool(factoryContract, token0Address, token1Address, poolFee) {
    let tx = await factoryContract.createPool(
        token0Address.toLowerCase(),
        token1Address.toLowerCase(),
        poolFee,
        { gasLimit: 10000000 }
    );
    await tx.wait();
    const poolAddress = await factoryContract.getPool(token0Address, token1Address, poolFee, {
        gasLimit: 3000000,
    });
    console.log('New Pool Created:', poolAddress);
    return poolAddress;
}

async function initializePool(poolAddress, startPrice, signer, abi) {
    const poolContract = new ethers.Contract(poolAddress, abi, signer);
    let tx = await poolContract.initialize(startPrice.toString(), {
        gasLimit: 3000000,
    });
    await tx.wait();
    console.log('Pool: ' + poolAddress + ' Initialized!');
}

async function convertToWei(value){
    return ethers.utils.parseUnits(value.toString(),"ether");
}

async function convertToEth(value){
    return ethers.utils.formatEther(value);
}

module.exports = { 
    contractInt,
    getPoolData,
    getSigner,
    approveTransfer,
    createPool,
    initializePool,
    convertToWei, 
    convertToEth,
    encodePriceSqrt
};
