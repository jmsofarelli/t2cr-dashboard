export const DASHBOARD_VIEW_CONTRACT_ADDR = {
  kovan: '0x6B6C6d6fFe9D6E2A675d56D68a22f9c3033d3Fc1',
  main: '0x1514Da1a6680A6ec0bD0bc255B083238e0eD0809'
}

export const DASHBOARD_VIEW_CONTRACT_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: '_aalAddress',
        type: 'address'
      },
      {
        name: '_klAddress',
        type: 'address'
      },
      {
        name: '_cursor',
        type: 'uint256'
      },
      {
        name: '_count',
        type: 'uint256'
      }
    ],
    name: 'addressCountByStatus',
    outputs: [
      {
        name: 'accepted',
        type: 'uint256'
      },
      {
        name: 'rejected',
        type: 'uint256'
      },
      {
        name: 'pending',
        type: 'uint256'
      },
      {
        name: 'challenged',
        type: 'uint256'
      },
      {
        name: 'crowdfunding',
        type: 'uint256'
      },
      {
        name: 'appealed',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_t2crAddress',
        type: 'address'
      },
      {
        name: '_klAddress',
        type: 'address'
      },
      {
        name: '_cursor',
        type: 'uint256'
      },
      {
        name: '_count',
        type: 'uint256'
      }
    ],
    name: 'tokenCountByStatus',
    outputs: [
      {
        name: 'accepted',
        type: 'uint256'
      },
      {
        name: 'rejected',
        type: 'uint256'
      },
      {
        name: 'pending',
        type: 'uint256'
      },
      {
        name: 'challenged',
        type: 'uint256'
      },
      {
        name: 'crowdfunding',
        type: 'uint256'
      },
      {
        name: 'appealed',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_aalAddress',
        type: 'address'
      },
      {
        name: '_t2crAddress',
        type: 'address'
      },
      {
        name: '_klAddress',
        type: 'address'
      },
      {
        name: '_cursor',
        type: 'uint256'
      },
      {
        name: '_count',
        type: 'uint256'
      }
    ],
    name: 'getCrowdfundingAddresses',
    outputs: [
      {
        name: 'count',
        type: 'uint256'
      },
      {
        components: [
          {
            name: 'name',
            type: 'string'
          },
          {
            name: 'ticker',
            type: 'string'
          },
          {
            name: 'symbolMultihash',
            type: 'string'
          }
        ],
        name: 'tokens',
        type: 'tuple[100]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_t2crAddress',
        type: 'address'
      },
      {
        name: '_klAddress',
        type: 'address'
      },
      {
        name: '_cursor',
        type: 'uint256'
      },
      {
        name: '_count',
        type: 'uint256'
      }
    ],
    name: 'getCrowdfundingTokens',
    outputs: [
      {
        name: 'count',
        type: 'uint256'
      },
      {
        components: [
          {
            name: 'name',
            type: 'string'
          },
          {
            name: 'ticker',
            type: 'string'
          },
          {
            name: 'symbolMultihash',
            type: 'string'
          }
        ],
        name: 'tokens',
        type: 'tuple[100]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_t2cr',
        type: 'address'
      },
      {
        name: '_address',
        type: 'address'
      }
    ],
    name: 'getRegisteredToken',
    outputs: [
      {
        components: [
          {
            name: 'name',
            type: 'string'
          },
          {
            name: 'ticker',
            type: 'string'
          },
          {
            name: 'symbolMultihash',
            type: 'string'
          }
        ],
        name: 'token',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_aal',
        type: 'address'
      },
      {
        name: '_kl',
        type: 'address'
      },
      {
        name: '_address',
        type: 'address'
      }
    ],
    name: 'getAddressStatus',
    outputs: [
      {
        name: 'status',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_t2cr',
        type: 'address'
      },
      {
        name: '_kl',
        type: 'address'
      },
      {
        name: '_tokenID',
        type: 'bytes32'
      }
    ],
    name: 'getTokenStatus',
    outputs: [
      {
        name: 'status',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_aal',
        type: 'address'
      },
      {
        name: '_address',
        type: 'address'
      }
    ],
    name: 'wasAddressChallenged',
    outputs: [
      {
        name: 'challenged',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_t2cr',
        type: 'address'
      },
      {
        name: '_tokenID',
        type: 'bytes32'
      }
    ],
    name: 'wasTokenChallenged',
    outputs: [
      {
        name: 'challenged',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
]
