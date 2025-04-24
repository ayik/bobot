"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "💥", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Goodchildwilliamz/GOODCHILD-MD';
  const img = 'https://files.catbox.moe/idioc5.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *goodchild_md.*\n support our channel *by*,  https://whatsapp.com/channel/0029VakLfckBlHpYVxryFJ14

_________● *𝐆𝐎𝐎𝐃𝐂𝐇𝐈𝐋𝐃* ●____________
|💥 *ʀᴇᴘᴏsɪᴛᴏʀʏ:* ${data.html_url}
|🌟 *sᴛᴀʀs:* ${repoInfo.stars}
|🍽 *ғᴏʀᴋs:* ${repoInfo.forks}
|⌚️ *ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ:* ${releaseDate}
|🕐 *ᴜᴘᴅᴀᴛᴇ ᴏɴ:* ${repoInfo.lastUpdate}
|👨‍💻 *ᴏᴡɴᴇʀ:* *𝐆𝐎𝐎𝐃𝐂𝐇𝐈𝐋𝐃 𝐓𝐄𝐂𝐇*
|💞 *ᴛʜᴇᴍᴇ:* *𝐆𝐎𝐎𝐃𝐂𝐇𝐈𝐋𝐃*
|🥰*ᴏɴʟʏ ɢᴏᴅ ᴄᴀɴ ᴊᴜᴅɢᴇ ᴍᴇ!👑*
__________________________________
            *ᴍᴀᴅᴇ ᴡɪᴛʜ 𝐆𝐎𝐎𝐃𝐂𝐇𝐈𝐋𝐃 ᴛᴇᴄʜ*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
