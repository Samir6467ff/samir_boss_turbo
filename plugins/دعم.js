let handler = async (m, { conn, command, text }) => {
let love = `
*لدعم البوت تستطيع ان تفعل:-*
*1_تستطيع دخول قروب دعم البوت لدعمه.↯↯*
*https://chat.whatsapp.com/C3yaHsijFY8AIc16z8DjDQ*

*2_وتستطيع ان تتابع البوت على الانستا:-*
*https://instagram.com/boss51_51?igshid=NTc4MTIwNjQ2YQ==* 

*3_وتستطيع دعم المطور من هنا:-*
*https://Solo.to/boss51-51*

*وشكرا لكم يا افضل مستخدمين 👾👑*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler
