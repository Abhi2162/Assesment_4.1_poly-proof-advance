require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
module.exports = {
  solidity: "0.8.20",
  networks: {
      sepolia: {
          url: "https://eth-sepolia.g.alchemy.com/v2/WJMdAL_eo-aXWqht1B0EoHUFtICvgqn5",
          accounts: [`80e7948518870adbf4fee0e1124cb3c6db5ef4e6697557bbe8a92ee12662c917`]
      },
      amoy: {
        url: "https://polygon-amoy.g.alchemy.com/v2/YZRimw6o4mT1nU93jyH8bOrouXHOY_nF",
        accounts: [`80e7948518870adbf4fee0e1124cb3c6db5ef4e6697557bbe8a92ee12662c917`]
      }
  }
};