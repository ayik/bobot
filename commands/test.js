"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "✌️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *𝐆𝐎𝐎𝐃𝐂𝐇𝐈𝐋𝐃 𝐌𝐃* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *𝐆𝐎𝐎𝐃𝐂𝐇𝐈𝐋𝐃 𝐓𝐄𝐂𝐇*';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/ifkhsp.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *ʟᴇᴏɴᴀʀᴅ* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Leonard*'
      let varmess=z+d
      var img='https://files.catbox.moe/vmibx0.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
