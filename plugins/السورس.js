let handler = async (m, { conn, command, text }) => {
let love = `‏

*✥━─━⌬〘𝙏𝙐𝙍𝘽𝙊_𝘽𝙊𝙏〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت تربو 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه بؤؤصص لفآججر〙⌬*
*⌬〘 هذا البوت يعمل بالخاص 〙⌬*
*⌬〘 ويعمل ايضاا بالمجموعات 〙⌬*
*⌬〘 اذا كنت تريد صناعه بوت 〙⌬*
*⌬〘 فعليك الانضمام الي جروبنا 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 واتساب 〙⌬*

*⏣⊰ https://chat.whatsapp.com/C3yaHsijFY8AIc16z8DjDQ ⊱⏣*

*⌬〘 واتساب 〙⌬*

*⏣⊰ https://wa.me/+201024480189 ⊱⏣*

*⌬〘 الدعم 〙⌬*

*⏣⊰ https://Solo.to/boss51-51 ⊱⏣*

*✥━─━⌬〘𝙏𝙐𝙍𝘽𝙊_𝘽𝙊𝙏〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler
