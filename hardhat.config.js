require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
//   networks: {
//     hardhat: {
//       chainId: 1337, // Hardhat node sẽ có chainId là 1337
//     },
//     localhost: {
//       url: "http://127.0.0.1:8545", // Địa chỉ Hardhat Node
//       accounts: [process.env.PRIVATE_KEY], // Tài khoản thử nghiệm từ biến môi trường
//     },
//   },
// };
