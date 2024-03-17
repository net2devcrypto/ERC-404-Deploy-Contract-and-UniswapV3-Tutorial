# ERC-404-Contract-UniswapV3Pool-Tutorial
The Ultimate ERC-404 Token Tutorial - Deploy your own ERC-404 then provide liquidity with an UniswapV3 Pool

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/erc404.jpg" width="650" height="370">

> [!NOTE]  
> THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY.
> NOT FINANCIAL ADVICE
> USE IT AT YOUR OWN RISK, I'M NOT RESPONSIBLE FOR ANY USE, ISSUES.

ENTIRE PLAYLIST:
<a href="https://www.youtube.com/playlist?list=PLLkrq2VBYc1ZTGE4wTlff2vczjn-YSUan" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="90" height="20"></a>

<h3>Part 2 Repo</h3>

Click for video:

<a href="https://youtu.be/z-Uu-MBrigU" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a>

Part2 "Contracts" Folder Contents:

```shell
N2DR-ERC404-Semifungibles.sol
ERC404.sol
```
1- Import both N2DR-ERC404-Semifungibles.sol and ERC404.sol contracts to Remix or any other environment like Hardhat or Foundry.

  Update N2DR-ERC404-Semifungibles.sol contract with your info: 
  
    ERC404("COLLECTION NAME", "TOKENSYMBOL", TOKENDECIMALS, TOTALSUPPLY
    balanceOf[_owner] = TOTALSUPPLY * 10**18;
    
example: 

```shell
    constructor(address _owner)
        ERC404("Net2Dev SemiFungibles Rewards", "N2DR", 18, 10000, _owner)
    {
        balanceOf[_owner] = 10000 * 10**18;
    }
```

then compile and deploy!

2- Update the token metadata description by calling the setMetadataDescription function on the contract.

3- Update the token dataURI with the path to the nft pictures by calling the setDataURI function on the contract.

<h3>Part 3</h3>

Click for video:

<a href="https://youtu.be/jUvAkeYjrx8" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a>

1- Make sure that your deployer wallet used to deploy both ERC-404 and FAKE USDT Contract has enough of both tokens stored to supply the pool liquidity.

Mint some FAKE USDT then send to the deployer wallet in case necessary. The wallet must have the amount of tokens specified in Step 3 below.

2- Download the folder "ERC-404-LiquidityPool-UniswapV3", extract and open in VS Code, Open Terminal and Install Dependencies.

```shell
cd ERC-404-LiquidityPool-UniswapV3
npm i
```

3- Update config.js with your the required contracts addresses and values except poolAddress: 

```shell
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

IMPORTANT:

THE PRIVATE KEY PROVIDED IN THIS CONFIG.JS FILE IS THE OWNER (DEPLOYER) WALLET OF BOTH ERC404 and FAKE USDT CONTRACTS.
IT MUST HAVE BOTH ERC-404 and FAKE USDT LIQUIDITY AMOUNTS SPECIFIED AVAILABLE BEFORE CONTINUING.

```
CTRL + S to save!!!

3- Proceed to create the pool and pre-approve the position contract address to transfer both pool tokens.

```shell
node step1-deploy-pool.js
```

Once completed, copy the pool address obtained in the console and update the poolAddress in config.js with.

```shell
const poolAddress = "SWAP_POOL_SMART_CONTRACT"   // Obtain the address after executing step1-deploy-pool.js then update here!
```

CTRL + S to save!!!

4- Proceed to open the position and add the required liquidity.

```shell
node step2-add-pos-liquidity.js
```

Once complete, test swapping tokens with any wallet except the owner/deployer wallet!!

Watch the part-3 final tutorial video for more info.


