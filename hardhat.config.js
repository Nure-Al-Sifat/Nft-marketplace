require("@nomiclabs/hardhat-waffle")

// const ROPSTEN_PRIVATE_KEY = "";


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//   unused configuration commented out for now
//  ropsten: {
//    url: "https://ropsten.infura.io/v3/a8e60948f23c4645872f6b3d4471da74",
//    accounts: [process.env.privateKey]
//    accounts: [`${ROPSTEN_PRIVATE_KEY}`]
//  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
