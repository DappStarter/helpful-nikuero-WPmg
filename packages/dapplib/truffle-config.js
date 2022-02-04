require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth rifle coin install clog orange ghost'; 
let testAccounts = [
"0xda0b6e44f32a1f523a4436da119a4fb24851c546fe045a63432b99e0797ef343",
"0x875e4931cabc05b8a2efd116680292372d3a924cfe5cc5c5afbb75a95b60710a",
"0x2c9ca36251cfac6715786006ce3c55de271e0fbc1c7a53b1c559df414e3653aa",
"0x3e03774e8fef7a79184d8afe31c89847fa46f1b9303ef3c951953dd6c2590e9e",
"0xb313ab95d222fb0dc5eea2834b092f602f6953a4e4882109f33ce3272bce2b90",
"0xd9e0f44b96927180654a5b2929206258dcfe31de8d690f91017cf96b5e8e9cff",
"0x54032f03c4508d28640dfa0886f5a5d78986820aa7de7b9b93c955f6f30122fd",
"0x357e22a95cc92fc7ae5d00eb98510d68ba89ec970d030a98dc57d8d066c3bb7a",
"0x7c250fd866322b4cfe7052fef47027e7dabe0886f0c51bf4a3a62a6acda72b3b",
"0xd5c6d161ad646a4c690769437a6c0b9be3937d29cd62250cf9ec2b5d1ad705ce"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

