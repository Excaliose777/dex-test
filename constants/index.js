// export const DEX_ADDRESS = "0xEeedEDdF34950608430F613c06A1A7fD56122742" // Address of the DEX Smart Contract
// export const TOKEN_ADDRESS = "0x04Fc4F008703099F024679Fa58Adf78f26bB91b2" // Address of the Stone Token Contract
// export const DEX_ABI = [
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "_stoneToken",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "Approval",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "Transfer",
//       "type": "event"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "addLiquidity",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         }
//       ],
//       "name": "allowance",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "approve",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "account",
//           "type": "address"
//         }
//       ],
//       "name": "balanceOf",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "decimals",
//       "outputs": [
//         {
//           "internalType": "uint8",
//           "name": "",
//           "type": "uint8"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "subtractedValue",
//           "type": "uint256"
//         }
//       ],
//       "name": "decreaseAllowance",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_minTokens",
//           "type": "uint256"
//         }
//       ],
//       "name": "ethToStoneToken",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "inputAmount",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "inputReserve",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "outputReserve",
//           "type": "uint256"
//         }
//       ],
//       "name": "getAmountOfTokens",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "pure",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "getReserve",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "addedValue",
//           "type": "uint256"
//         }
//       ],
//       "name": "increaseAllowance",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "name",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "removeLiquidity",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "stoneTokenAddress",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_tokensSold",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_minEth",
//           "type": "uint256"
//         }
//       ],
//       "name": "stoneTokenToEth",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "symbol",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "totalSupply",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "transfer",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "transferFrom",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ]
// export const TOKEN_ABI = [
//     {
//       "inputs": [],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "Approval",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "previousOwner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "OwnershipTransferred",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "Transfer",
//       "type": "event"
//     },
//     {
//       "stateMutability": "payable",
//       "type": "fallback"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         }
//       ],
//       "name": "allowance",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "approve",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "account",
//           "type": "address"
//         }
//       ],
//       "name": "balanceOf",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "decimals",
//       "outputs": [
//         {
//           "internalType": "uint8",
//           "name": "",
//           "type": "uint8"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "subtractedValue",
//           "type": "uint256"
//         }
//       ],
//       "name": "decreaseAllowance",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "addedValue",
//           "type": "uint256"
//         }
//       ],
//       "name": "increaseAllowance",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "maxTotalSupply",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "mint",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "name",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "owner",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "renounceOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "symbol",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "tokenPrice",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "totalSupply",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "transfer",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "transferFrom",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "transferOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "withdraw",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "stateMutability": "payable",
//       "type": "receive"
//     }
//   ]

  // export const DEX_ADDRESS = "0xB2345eb6A5cf87ec34E51586602DFD6618F5EAeF"
  // export const TOKEN_ADDRESS = "0x6706d07290f1f7A35c685D939F822731484c7610"
  // export const DEX_ABI = [
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "_stoneToken",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "value",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Approval",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "value",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Transfer",
  //     "type": "event"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "addLiquidity",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "payable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "allowance",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "approve",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "balanceOf",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "decimals",
  //     "outputs": [
  //       {
  //         "internalType": "uint8",
  //         "name": "",
  //         "type": "uint8"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "subtractedValue",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "decreaseAllowance",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_minTokens",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "ethToStoneToken",
  //     "outputs": [],
  //     "stateMutability": "payable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "inputAmount",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "inputReserve",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "outputReserve",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "getAmountOfTokens",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "pure",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getReserve",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "addedValue",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "increaseAllowance",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "name",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "removeLiquidity",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "stoneTokenAddress",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_tokensSold",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_minEth",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "stoneTokenToEth",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "symbol",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "totalSupply",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "transfer",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "transferFrom",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   }
  // ]
  // export const TOKEN_ABI = [
  //   {
  //     "inputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "value",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Approval",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "previousOwner",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "newOwner",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "OwnershipTransferred",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "value",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Transfer",
  //     "type": "event"
  //   },
  //   {
  //     "stateMutability": "payable",
  //     "type": "fallback"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "allowance",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "approve",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "balanceOf",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "decimals",
  //     "outputs": [
  //       {
  //         "internalType": "uint8",
  //         "name": "",
  //         "type": "uint8"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "subtractedValue",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "decreaseAllowance",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "spender",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "addedValue",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "increaseAllowance",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "maxTotalSupply",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "mint",
  //     "outputs": [],
  //     "stateMutability": "payable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "name",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "owner",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "renounceOwnership",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "symbol",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "tokenPrice",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "totalSupply",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "transfer",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "transferFrom",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "newOwner",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "transferOwnership",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "withdraw",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "stateMutability": "payable",
  //     "type": "receive"
  //   }
  // ]


  export const DEX_ADDRESS = "0x397131d775d9FAc3A7d8293F686AF1c366A0563F"

  export const TOKEN_ADDRESS = "0x64298f36361ba633B4765665d2572E59988CBcdf"

  export const DEX_ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stoneToken",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minTokens",
          "type": "uint256"
        }
      ],
      "name": "ethToStoneToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "inputAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "inputReserve",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "outputReserve",
          "type": "uint256"
        }
      ],
      "name": "getAmountOfTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReserve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stoneTokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokensSold",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minEth",
          "type": "uint256"
        }
      ],
      "name": "stoneTokenToEth",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

   export const TOKEN_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxTotalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalMinted",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]