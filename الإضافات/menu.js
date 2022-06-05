
let handler = async (m, { usedPrefix }) => {

const os = require('os')
    let context = `
╔══════════════════════
║
╠❐ chargho-bot by : youssef ech-charki
║
╠❐ بوت لولاد قيسمي خاصة هه للمغاربة عامة
║
╠❐ 𝐔𝐏𝐓𝐈𝐌𝐄    : ${uptime}
║
╠❐ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍   : ${version}
║
╠❐ 𝐒𝐓𝐀𝐓𝐔𝐒    : 𝐀𝐋𝐈𝐕𝐄
║
╠❐ 𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 : ${user}
║
╠❐ 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑𝐄𝐃 : ${users+5}
║
╠❐ 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: ${os.type()}
║
╚════════════════════════`
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`my instagram `, `https://instagram.com/charq_iii?igshid=YmMyMTA2M2Y=`, null,null, `ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i


module.exports = handler
