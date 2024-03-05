# ERC-404-Contract-UniswapV3Pool-Tutorial
The Ultimate ERC-404 Token Tutorial - Deploy your own ERC-404 then provide liquidity with an UniswapV3 Pool

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/erc404.jpg" width="650" height="370">

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **

ENTIRE PLAYLIST:
<a href="https://www.youtube.com/playlist?list=PLLkrq2VBYc1ZTGE4wTlff2vczjn-YSUan" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="90" height="20"></a>

<h3>Part 2 Repo</h3>

Click for video:

<a href="https://youtu.be/z-Uu-MBrigU" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a>

Part2 "Contracts" Folder Contents:

```shell
N2DR-ERC404-Semifungibles.sol
```
1- Import both N2DR-ERC404-Semifungibles.sol and ERC404.sol contracts to Remix or any other environment like Hardhat or Foundry.

  Update your contract with the info: 
  
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


2- Update the token symbol, Compile the N2DR-ERC404-Semifungibles.sol contract and 

2- Whitelist the contract owner wallet address by calling the setWhitelist function on the contract.

3- Update the token metadata description by calling the setMetadataDescription function on the contract.

4-

