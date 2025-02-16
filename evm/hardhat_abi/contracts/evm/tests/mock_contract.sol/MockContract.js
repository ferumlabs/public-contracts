export default [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "contract MockCoin",
        "name": "tokenA",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "tokenAAmt",
        "type": "int256"
      },
      {
        "internalType": "contract MockCoin",
        "name": "tokenB",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "tokenBAmt",
        "type": "int256"
      }
    ],
    "name": "adj",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fail",
    "outputs": [],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "success",
    "outputs": [],
    "stateMutability": "pure",
    "type": "function"
  }
];
