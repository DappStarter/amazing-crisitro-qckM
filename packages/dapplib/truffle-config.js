require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note miss essay inflict entry broken tenant'; 
let testAccounts = [
"0xf45279a529d2739b664dd0d9f4fdd26d0b42685a94250c2d91e22ce58ae0cdaa",
"0x0aba0441fdfb9917ec6aa46a0f3b9418ced422839ab4f3694bd9b4aaca1838d2",
"0xaad1ded5fcfef3da480a3f9d85711a4012f162bd24c55446e742b4242de2353b",
"0x69e0b08cae2803a1606d32f189ef40ed747b213b3cd274c6ba32238b0282bca3",
"0xe1338ac79c2d7a4d532a7718df6273ef33ff7aead62362e3976d56798138166f",
"0xfe041e7843988541156d28034120dd1d81443077ba48231e1bfda23672991da6",
"0x9ab22d6f1a5e4cff85e1b1895c285e38ec19dcb386410599b278986c1962fd1f",
"0xb41eef8b4b4dabe84b32a5dfb2bf0eb9d056f305b2f7675781f59168f62c2963",
"0x9c2c89ac64e08bd60dcac9e0977813270d66bcda82f2f3a9c1f2bb9b7cba0f24",
"0x4e99ed59504ed03a27494b5c93bbff2265c2f1614a3bd968324005f9ef1fc076"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

