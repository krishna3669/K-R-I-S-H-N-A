module.exports.config = {
    name: "admin",
    version: "1.0.1", 
    hasPermssion: 0,
    credits: "Abdulla Rahaman",
    description: "Abdulla Tech 49",
    commandCategory: "...",
    cooldowns: 1,
    dependencies: 
    {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/boAQPSI.jpeg", 

            "https://i.imgur.com/boAQPSI.jpeg", 

"https://i.imgur.com/boAQPSI.jpeg",

            "https://i.imgur.com/boAQPSI.jpeg"];

var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝐊𝐑𝐈𝐒𝐇𝐍𝐀  𝗞𝗵𝗮𝗻\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐀𝐁𝐔\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝐌𝐀𝐇𝐀𝐃𝐄𝐕)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝐈𝐍𝐃𝐈𝐀)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝐈𝐍𝐃𝐈𝐀, 𝐑𝐀𝐉𝐀𝐒𝐓𝐀𝐍\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝐌𝐀𝐋𝐄)\n𝗔𝗴𝗲            :  (𝟐𝟎)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝐒𝐈𝐍𝐆𝐋𝐄)\n𝗪𝗼𝗿𝗸         : 𝐉𝐎𝐁\n𝗚𝗺𝗮𝗶𝗹        :  rishirk630344@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/8094828237\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : @Ravi23657543\n𝗙𝗯 𝗹𝗶𝗻𝗸   : 100062282613155
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
