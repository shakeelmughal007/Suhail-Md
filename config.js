const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923186201007,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_50_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjExLFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBrTmtNc1Q4a3ZhZUN4cXV4c2ZLc20yVzArbTQzSlF1emVnd1RoNlBuNUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTg2MjAxMDA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNjk1RUVBQjhGMDk5RTQ5RTA0NjVCRDkxMDg3MzBFM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2ODA2MzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWWJWbWY2ZmpRTlN1cEVzd1hPazc1QVwiLFxuICBcInBob25lSWRcIjogXCI4NTkyYjI5NC0yNjcyLTQ2MDgtYTVmNS1mNGQ0ZDM1NDZmODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTA0LFxuICAgICAgMjQ0LFxuICAgICAgMTgzLFxuICAgICAgMjQzLFxuICAgICAgMzcsXG4gICAgICAyMjIsXG4gICAgICAxMjIsXG4gICAgICA1MCxcbiAgICAgIDE3LFxuICAgICAgMjMsXG4gICAgICAxOTQsXG4gICAgICA2NixcbiAgICAgIDkzLFxuICAgICAgMjAyLFxuICAgICAgMTA5LFxuICAgICAgNzAsXG4gICAgICAyMzAsXG4gICAgICAxNDcsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDE1MixcbiAgICAgIDIxNyxcbiAgICAgIDE0MSxcbiAgICAgIDE1MixcbiAgICAgIDEzNyxcbiAgICAgIDE4NixcbiAgICAgIDIzMyxcbiAgICAgIDE2MSxcbiAgICAgIDM4LFxuICAgICAgMjYsXG4gICAgICAxNyxcbiAgICAgIDEyMixcbiAgICAgIDE4MyxcbiAgICAgIDE0NCxcbiAgICAgIDE0LFxuICAgICAgMTksXG4gICAgICAxOTAsXG4gICAgICAxNzQsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0UzNHUDdWWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTg2MjAxMDA3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLZhdiz2bnZgNiU2ZLZgNiU2ZLZgNiU2ZLYlNmA2JTZktiU2YDYlNmS2LEg2LTaqduM2YDYlNmS2YDYlNmS2YDYlNmS2JTZgNiU2ZLYlNmA2JTZktmEINmF2LrZgNiU2ZLZgNiU2ZLZgNiU2ZLYlNmA2JTZktiU2YDYlNmS2YRcIixcbiAgICBcImxpZFwiOiBcIjE1OTQ1NTQ1OTIwNTI4ODoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ByOHI1MEhFTEdCdnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUW9XekJqNDZ1SUdvc1BVSmZkSFE0U2prUlNpMWcwQzdaVnFoTVNQK2JIUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqa0N6czN1SDJ1NGdzR0NjRkFyMWlqZEpRbWNrUWpjU2U3NGFCSTlnUEFkUlFoWjdyd3NmNnRyUCtscTY5dWdyVDMwdGZKL0d2TlRVdVdaeUJWWktBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlbjVyUXVKcWpIOStnVnZiSk0rcWlqcGZHcnBVeHdYL2JlRmd4blNFbkZkYWE2eFlpQ1ViTzA5N1dxaDFVR3JNQ0NlQ2NreXBwNno5enZ6L2VvcklqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxODYyMDEwMDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2ODA2MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGMi9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYyLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "*᭕😎⃢❤️⃝🔥ᏚԊɑӃɘɘȽ ɱʋᎶԊɑȽ🧸⃢🔥⃝♥️᭄*",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
