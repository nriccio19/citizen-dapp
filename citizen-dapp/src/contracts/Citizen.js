export const Citizen_address =
  '0x0d6B24a6A95914EEf7CF4C9d13Bce25352F50Cfe'

export const Citizen_abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_nbvote",
				"type": "uint256"
			}
		],
		"name": "gestionSage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "register",
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "se_presenter_sage",
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_nbvote",
				"type": "uint256"
			},
			{
				"internalType": "enum Citizen.choix",
				"name": "bulletin",
				"type": "uint8"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "a_voter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "candidat",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "temps_vote",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "voteOui",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "voteNon",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "innocent",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "legere",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lourde",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "grave",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "crime",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "admin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isSage",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "depot_sage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "delayRegistration",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "administration",
		"outputs": [
			{
				"internalType": "bool",
				"name": "citoyen",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "wallet",
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
				"name": "_nbvote",
				"type": "uint256"
			}
		],
		"name": "result",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
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
		"stateMutability": "view",
		"type": "function"
	}
]