import { ethers } from "ethers";
import SmartForum from './artifacts/contracts/smartForum/smartForum.sol/SmartForum.json';

const forumAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3" ;

async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });

}
        
async function getName() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(forumAddress, SmartForum.abi, provider)
      try {
        const data = await contract.nameForum();
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  } 



  async function setForum() {
    if (!setForum) return;
    if (typeof window.ethereum !== 'undefined') {
        await requestAccount()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log({ provider })
        const signer = provider.getSigner()
        const contract = new ethers.Contract(forumAddress, SmartForum.abi, signer)
        const transaction = await contract.setForum("shitter")
        await transaction.wait()
        getName();
  
    }
  }

export { setForum, requestAccount, getName };
