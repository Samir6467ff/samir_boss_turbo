import fg from 'api-dylux' 
import axios from 'axios'
import cheerio from 'cheerio'
import { tiktok } from "@xct007/frieren-scraper";
let generateWAMessageFromContent = (await import(global.baileys)).default
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `*عاوز تحميل ايه يحب ؟🐉*\n*ضيف رابك الفديو يحب*\n*مثال:*\n*${usedPrefix + command} https://www.tiktok.com/@ox__zoro__ox?_t=8ggRMe37f9y&_r=1*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `*رابط TikTok غير صحيح*`, fkontak,  m)  
const { key } = await conn.sendMessage(m.chat, {text: `⌛ _جاري التحميل..._\n▰▰▰▱▱▱▱▱▱\nيتم استخراج مقطع الفيديو من TikTok 🔰`}, {quoted: fkontak});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `⌛ _جاري التحميل..._\n▰▰▰▰▰▱▱▱▱\nيتم استخراج مقطع الفيديو من TikTok 🔰`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `⌛ _جاري التحميل..._\n▰▰▰▰▰▰▰▱▱\nيتم استخراج مقطع الفيديو من TikTok 🔰`, edit: key});
await conn.sendMessage(m.chat, {text: `⌛ _جاري التحميل..._\n▰▰▰▰▰▰▰▰▰\nيتم استخراج مقطع الفيديو من TikTok 🔰`, edit: key});
//await conn.reply(m.chat, `⌛ _جاري العملية..._\n▰▰▰▰▰▱▱▱▱\nيتم استخراج مقاطع الفيديو من TikTok لصنع ملصقات 🔰`, fkontak,  m) 
try {
const dataF = await tiktok.v1(args[0])
conn.sendFile(m.chat, dataF.play, 'tiktok.mp4', `*تم تحميل الفيديو ✅*`.trim(), m) 
} catch (e1) {
try {
const tTiktok = await tiktokdlF(args[0])
conn.sendFile(m.chat, tTiktok.video, 'tiktok.mp4', `*تم تحميل الفيديو ✅*`.trim(), m) 
} catch (e2) {
try {
let p = await fg.tiktok(args[0]) 
conn.sendFile(m.chat, p.nowm, 'tiktok.mp4', `*تم تحميل الفيديو ✅*`.trim(), m)
} catch (e3) {
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
conn.sendFile(m.chat, url, 'tiktok.mp4', `*تم تحميل الفيديو ✅*`.trim(), m)
} catch {
handler.limit = 0
}}}}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|تيك)(dl|nowm)?$/i
handler.limit = 1
export default handler
const delay = time => new Promise(res => setTimeout(res, time))

async function tiktokdlF(url) {
if (!/tiktok/.test(url)) return 'Enlace incorrecto';
const gettoken = await axios.get("https://tikdown.org/id");
const $ = cheerio.load(gettoken.data);
const token = $("#download-form > input[type=hidden]:nth-child(2)").attr( "value" );
const param = { url: url, _token: token };
const { data } = await axios.request("https://tikdown.org/getAjax?", { method: "post", data: new URLSearchParams(Object.entries(param)), headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36" }, });
var getdata = cheerio.load(data.html);
if (data.status) {
return { status: true, thumbnail: getdata("img").attr("src"), video: getdata("div.download-links > div:nth-child(1) > a").attr("href"), audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"), }} else
return { status: false }}
