let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/65cfc6dd32215a624e9dc.mp4'
  let { name } = global.db.data.users[who]
  m.react('💎')
let str = `                  ✥━─━⌬ 𝙏𝙐𝙍𝘽𝙊_𝘽𝙊𝙏 ⌬━─━✥
【..≼قــســم البنك≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

❐..💎╎❯ .البنك⌉
❐..💎╎❯ .راتب⌉
❐..💎╎❯ .شراء⌉
❐..💎╎❯ .شراءالكل⌉
❐..💎╎❯ .هجوم⌉
❐..💎╎❯ .تحويل⌉
❐..💎╎❯ .يومي⌉
❐..💎╎❯ .الماس⌉
❐..💎╎❯ .ترتيب⌉
❐..💎╎❯ .ايدي⌉
❐..💎╎❯ .لفل⌉
❐..💎╎❯ .تسجيل⌉
❐..💎╎❯ .الغاء_التسجيل⌉
                    ✥━─━⌬ 𝙏𝙐𝙍𝘽𝙊_𝘽𝙊𝙏 ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['البنك']

export default handler
