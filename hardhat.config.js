require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});                  
const privatekey ='0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
module.exports = {
  networks: {
    hardhat: {
      
    },
    // ropsten: {
  
    //   url: "https://ropsten.infura.io/v3/34587aa44f264052a6689694037d7142",
    //   chainId:3,
    //   accounts: [privatekey]
    // }

  
  },
  
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 100000
  },
  // etherscan: {
   
  //   apiKey: "6STW5UEGDF936CQ5V7YE2ENQGKQRV31G4T"
  // }
}