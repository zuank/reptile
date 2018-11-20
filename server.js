const cheerio = require('cheerio')
const superagent = require('superagent')
require('superagent-proxy')(superagent);
const fs = require('fs');

const reptileUrl = "http://javascript.ruanyifeng.com/nodejs/fs.html#toc1";
const proxy = 'http://127.0.0.1:59773';
const header = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch, br',
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
    'Cache-Control': 'max-age=0',
    'Cookie': '_ga=GA1.2.1653214693.1476773935; VISITOR_INFO1_LIVE=T3BczuPUIQo; SID=5QR6XEldVgveXzFtqjIcD480cHE18gBRd3xPo398vndcc5JNxOAZ-TgVp5jQx3CR-ePvgA.; HSID=APr2I8UwM-A-Lypbd; SSID=Ap4H3Td1nrV__-9tN; APISID=8bHyFV90pNBU5Z9p/A2DlJa2MyJLL4-RKP; SAPISID=4tZf4GDX7Dt5bNAt/A5vhaZe_DLzn-ECul; CONSENT=YES+CN.zh-CN+20160904-14-0; YSC=XVHk_pArWhE; PREF=cvdm=grid&f1=50000000&f6=1&f5=30&al=zh-CN&gl=HK',
    'Upgrade-insecure-requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36',
    'X-Chrome-Uma-Enabled': '1',
    'X-Client-Data': 'CJa2yQEIorbJAQjBtskBCKmdygE=',
    'Connection': 'keep-alive'
};

superagent.get(reptileUrl).set('header', header).proxy(proxy).end(function (err, res) {
    // 抛错拦截

    if (err) {
        console.log(err)
        return
        throw Error(err);
    }
    let $ = cheerio.load(res.text);

    fs.writeFile('./res-file/' + new Date().getTime() + '.html', res.text, function () {
    })
});