import { FETCH_CROWDFUNDING_TOKENS } from '../actions/types'

/*
// This mock was created for visually testing the crowdfunding tokens and pagination
const defaultState = [
    {
        name: 'Dai',
        ticker: 'DAI',
        symbolMultihash: '/ipfs/QmNhD5nU1P7Byxt2JcCKVC8cEovX7uZp2UwtFuTc2A1A5W/Bccy113zguacYoTLDGU2pHkPbV9xULKqz8HPcqc4NeDaeopSUjAq4accWBgcDTLdgj37TxnpWkjTxfdrR4jzu2xwrV'
    },
    {
        name: 'Fetch',
        ticker: 'FET',
        symbolMultihash: '/ipfs/QmZy7VeUSk55TF659w5aWnyaKa65mVFNKeCfANyG4UPW2d/Bcd77YGe6GLnnMW9HmTvtrc2ppKj8kbp5LPcdjREhNBBR7CNbVAf7vPPvzCCNbyzH9kKRJpnrVEFnayHgumKcRXJ6U'
    },
    {
        name: 'Crypto.com',
        ticker: 'MCO',
        symbolMultihash: '/ipfs/QmZae6U53k5k9jwVaPJBiR6MzcodwRYNJYDADHauepZRW9/BccwpxN5kpokwwgEd7p72tSLhYCtVUc2Sb6F3uF4XRRN84amo6SSrJGHuXxaDAXCv4amyKLkUFuPVHsEygLwZwF97e'
    },
    
    {
        name: 'Fantom',
        ticker: 'FTM',
        symbolMultihash: '/ipfs/QmdxdG7YvCwkAYJ6dzxUFEW7JQSqYfYU93ZDPmJdDZjcgV/Bcd7Jt4V3TazgFFJjtLahubwdUAwPwyM9Gmvdv2PyEYSXLj9rnPLpVLjSszcsg1jT6MNC8HUcGH2h246VnT1qEBDFe'
    },
    {
        name: 'ZRX',
        ticker: 'ZRX',
        symbolMultihash: '/ipfs/QmfT6q7bdPD3Rq4NYraJgMvq3DXVKMtnABPW5mYwXpnDpE/Bcd8ExMLfNRxcPnhTZbB434WLv2SvvrUfpoUy8ukKb89AVwHeGN35BiKDLXYqmFgJEmQTGNNWG27MQ1DMVBUmFXvE4'
    },
    {
        name: 'Spendcoin',
        ticker: 'SPND',
        symbolMultihash: '/ipfs/QmdpYdxDgDGULNZx9t8RiFxdjxVNhCNk4MMLXKJvp6yaQn/Bce2TdJgErAzPvjtVn8VGhFtoGJAdvn8sDHFkaj27fmMxTeAfwv3of881pVMNaG8mwMmb6on8dCmQHbVwLh8GPWT8V'

    },
    {
        name: 'Loom Network',
        ticker: 'LOOM',
        symbolMultihash: '/ipfs/QmYTRvkK6vYziwpkxk1Qhw1SipQPa9Rmcn7adXfpVorXZs/BcdvrNjx9PqRqExyApshYkoYYkadG7S8wyYt5w1ePxk8coKbMezhJV6mibhmPMJqnhT8iWG671RvYdUXJcej3mjtoH'
    },
    {
        name: 'AirSwap',
        ticker: 'AST',
        symbolMultihash: '/ipfs/QmNj3S84rPNjVWr8T2funqVVxLetVcUu15GmrJtGuStkoQ/Bcd3cBhHeNv8QbC4459uhoq1Fwm4sHr1qfhYcMTUh6sU5EYgbThcKe3NRTG7C2ewNxpzpPPt36Hhh35x47u7cyvWUD'
    },
    {
        name: 'FOAM',
        ticker: 'FOAM',
        symbolMultihash: '/ipfs/QmR3FN81q5Yo7YTYuJ8gXKcmJZ1uMo7oF7vzBn16AqPGcH/Bce2SK4D94boQziUzoMGVfrpXFR9GVcYJEdywgYR7SoNcRDJ5PUX9hLvnQqk6BpGDjBkZvd8RMzSwGJeL8NU63oC1i'
    },
    {
        name: 'qiibee Token',
        ticker: 'QBX',
        symbolMultihash: '/ipfs/QmTwgJA9gs9sJ4f2k5VJzdVAVZD2TZXRUNj1Cqz17kB1gV/Bccz8A4bCBDumGZoPt13rPd1X6fbv7Y6KFGmzT2yPc8gXD4qhAiT4kb29jhb2cyXd4GSc2p1WhKPnpQaYYoXdDuhNd'
    }
];
*/

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CROWDFUNDING_TOKENS:
      // return defaultState;
      return action.payload
    default:
      return state
  }
}
