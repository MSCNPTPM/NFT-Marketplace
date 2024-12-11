const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const DeployModule = buildModule("TokenModule", (m) => {
  const marketPlace = m.contract("NFTSTORE");
  return marketPlace;
});

module.exports = DeployModule;

// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// const DeployModule = buildModule("TokenModule", (m) => {
//   // Sử dụng ethers từ m.hre
//   const ethers = m.hre.ethers;

//   // Lấy contract factory cho NFTSTORE
//   const NFTSTORE = ethers.getContractFactory("NFTSTORE");

//   // Triển khai hợp đồng
//   return NFTSTORE.deploy().then((nftStore) => {
//     // Đảm bảo hợp đồng đã được triển khai thành công
//     return nftStore.deployed().then(() => {
//       console.log("NFTSTORE deployed to:", nftStore.address);
//       return nftStore;
//     }).catch((error) => {
//       console.error("Deployment failed:", error);
//     });
//   }).catch((error) => {
//     console.error("Error during contract deployment:", error);
//   });
// });

// module.exports = DeployModule;





