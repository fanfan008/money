const $ = new Env('推粉宝');
const notify = $.isNode() ? require('./sendNotify') : '';
const crypto = require('crypto');
const qs=require("qs");
const userArr = [
    {
        'tfbhd': 'gfsessionid=14sdy1pj7mri20cdny2jv4mz6gy66xy3; tfb_msg=%7B%22head_img_url%22%3A%22https%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FQ0j4TwGTfTLtSc1dYTibNqLroNibZd87kiagys3z6UcfoI79sTPSXaJz9RlWorqBicnzbH3ROA68o4PjkzSJ7Fq59g%2F132%22%2C%22msg%22%3A%22%E4%BB%A5%E5%89%8D%E7%9A%84%E7%A0%81%E5%AF%BC%E8%87%B4%E7%94%A8%E6%88%B7%E6%89%AB%E7%A0%81%E6%97%A0%E6%B3%95%E9%80%9A%E8%BF%87%E6%A3%80%E6%B5%8B%EF%BC%8C%E7%8E%B0%E5%AF%B9%E4%BB%A5%E5%89%8D%E7%9A%84%E6%97%A0%E6%95%88%E7%A0%81%E5%81%9A%E4%BA%86%E6%8B%A6%E6%88%AA%EF%BC%8C%E8%AF%B7%E5%A4%A7%E5%AE%B6%E5%89%8D%E5%BE%80%E5%B9%B3%E5%8F%B0%E4%BF%9D%E5%AD%98%E6%96%B0%E7%A0%81%EF%BC%8C%E5%A6%82%E6%9E%9C%E9%81%87%E5%88%B0%E5%87%A0%E5%A4%A9%E9%83%BD%E6%97%A0%E6%B3%95%E9%80%9A%E8%BF%87%EF%BC%8C%E8%AF%B7%E5%A4%9A%E7%AD%89%E5%BE%85%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E3%80%82%E5%AF%B9%E5%A4%A7%E5%AE%B6%E9%80%A0%E6%88%90%E7%9A%84%E4%B8%8D%E4%BE%BF%E6%B7%B1%E6%84%9F%E6%AD%89%E6%84%8F%EF%BC%8C%E7%A5%9D%E5%A4%A7%E5%AE%B6%E5%A4%A9%E5%A4%A9%E5%BC%80%E5%BF%83%EF%BC%8C%E4%BA%8B%E4%BA%8B%E9%A1%BA%E5%BF%83%E3%80%82%E9%98%85%E8%AF%BB%E6%9C%80%E5%88%9D1-2%E7%AF%87%E4%B8%BA%E6%A3%80%E6%B5%8B%E6%96%87%E7%AB%A0%EF%BC%8C%E9%87%91%E5%B8%81%E8%BE%83%E4%BD%8E%EF%BC%8C%E8%AF%B7%E7%9F%A5%E6%82%89%EF%BC%8C%E6%9C%9B%E7%90%86%E8%A7%A3%22%2C%22nick_name%22%3A%22%E8%8C%83%E8%8C%83%22%2C%22uid%22%3A376428%7D',//Cookie参数必选
        'UA': 'Mozilla/5.0 (Linux; Android 10; ELS-NX9 Build/HUAWEIELS-N29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2759 MMWEBSDK/201201 Mobile Safari/537.36 MMWEBID/1583 MicroMessenger/8.0.1.1840(0x2800013B) Process/tools WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64'//微信UA可选
    }
];
let hd=JSON.stringify({
    'Host': 'api.ayonbnix.cn',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Origin': 'http://api.ayonbnix.cn',
    'Referer': 'http://api.ayonbnix.cn/page',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9'
    }),tfbhd,UA;
let host ='http://api.ayonbnix.cn';
let DD = RT(1000,3000)
let tz = ($.getval('tz') || '0');
let today=new Date().toJSON().match(/(^\d{4}).(\d{2}).(\d{2})/i)[0];
let times=0,readFlag,watchFlag,likeFlag;
$.message = ''



!(async () => {
    console.log(
        `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===============================================\n`
    );
    console.log(`=================== 共${userArr.length}个账号 ==================\n`)
        for (let i = 0; i < userArr.length; i++) {
            if (userArr[i]) {
                UA = userArr[i]['UA'];
                tfbhd = userArr[i]['tfbhd'];
                console.log(`\n【 推粉宝 账号${i+1} 】，等待时长${DD}\n`);
                $.message += `\n【 推粉宝 账号${i+1} 】\n`;
				await signInfo();
                await $.wait(2000);
                await readInfo();
                readFlag=true
                while(readFlag){
                    await $.wait(2000);
                    await readTask()
                }
                watchFlag=true
                while(watchFlag){
                    await $.wait(2000);
                    await watchTask()
                }
                await personInfo()
            }
        }
    message();
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
function personInfo(timeout = 0) {
    return new Promise((resolve) => {
        $.get(getConfig("/person/info", {}), async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.code === 0) {
                    if(data.data.remain>=3000){
                        await withdraw()
                    }else{
                        console.log('微信满3000金币才能提现!\n')

                    }
                }else {
                    console.log(`${data.message}\n`)
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}

function tfbck() {
   if ($request.url.indexOf("sign/info") > -1) {
  const tfbhd = JSON.stringify($request.headers)
if(tfbhd)    $.setdata(tfbhd,`tfbhd${status}`)


$.log(tfbhd)


   $.msg($.name,"",'推粉宝阅读'+`${status}` +'数据获取成功！')
 
}
}


function readInfo(timeout = 0) {
    return new Promise((resolve) => {
        $.get(getConfig("/read/info", {}), async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.code === 0) {
                    console.log(`今日已阅读${data.data.read}篇文章！已获得${data.data.gold}金币\n`)
                } else {
                    console.log(`${data.message}\n`)
                }
            } catch (e) {} finally {
                resolve()
            }
        }, timeout)
    })
}
function jump(url,timeout = 0) {
    return new Promise((resolve) => {
        let config = {
            url: `${host}${url}`,
            headers: Object.assign({}, JSON.parse(hd),{'Cookie':tfbhd})
        }
        config.headers['User-Agent'] = UA || 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.17(0x17001126) NetType/WIFI Language/zh_CN';
        $.get(config, async (err, resp, data) => {
            try {
                console.log('模拟阅读')
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function readTask(timeout = 0) {
    return new Promise((resolve) => {
        $.get(getConfig("/read/task", {}), async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.code === 0) {
                    await jump(data.data.link)
                    await $.wait(10000)
                    await readFinish()
                }else {
                    readFlag=false
                    console.log(`${data.message}\n`)
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function readFinish(timeout = 0) {
    return new Promise((resolve) => {
        $.post(getConfig("/read/finish", {},'post'), async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.code === 0) {
                    console.log(`今日已阅读${data.data.read}篇文章！已获得${data.data.gold}金币!总金币${data.data.remain}！`)
                }else {
                    readFlag=false
                    console.log(`${data.message}\n`)
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function watchTask(timeout = 0) {
    return new Promise((resolve) => {
        $.get(getConfig("/watch/task", {}), async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.code === 0) {
                    await jump(data.data.link)
                    await $.wait(10000)
                    await watchFinish()
                }else {
                    watchFlag=false
                    console.log(`${data.message}\n`)
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function watchFinish(timeout = 0) {
    return new Promise((resolve) => {
        $.post(getConfig("/watch/finish", {},'post'), async (err, resp, data) => {
            try {
                console.log(data,'待测试')
                data = JSON.parse(data)
                if (data.code === 0) {
                    console.log(`今日已观看${data.data.read}个视频！已获得${data.data.gold}金币!总金币${data.data.remain}！`)
                }else {
                    watchFlag=false
                    console.log(`${data.message}\n`)
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function signInfo(timeout = 0) {
    return new Promise((resolve) => {
        $.get(getConfig("/sign/info", {}), async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.code === 0) {
                    if(data.data.is_sign===0){
                        await signIn()
                    }else{
                        console.log(`已签到,连续签到${data.data.continue}天!再签${data.data.again}天,可以获得${data.data.gold}金币！\n`)
                    }
                }else {
                    console.log(`获取签到信息异常：${data.message}\n`)
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function signIn(timeout = 0) {
    return new Promise((resolve) => {
        $.post(getConfig("/sign/in", {}), async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.code === 0) {
                    console.log(`签到成功,连续签到${data.data.continue}天!再签${data.data.again}天,可以获得${data.data.gold}金币！\n`)
                }else {
                    console.log(`签到异常：${data.message}\n`)
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function withdraw(remain,timeout = 0) {
    return new Promise((resolve) => {
        $.post(getConfig("/withdraw/wechat", {gold:remain}), async (err, resp, data) => {
            try {
                console.log(data,'\n');
                data = JSON.parse(data)
                if (data.code === 0) {
                    console.log(`提现成功！\n`)
                }else {
                    console.log(`提现异常：${data.message}\n`)
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
async function message() {
    if (tz == 1) {
        await notify.sendNotify($.name, $.message)
        $.msg($.name, "", $.message)
    }
}
function getConfig(url, json,methods='get') {
    let time=Date.parse(new Date) / 1000
    let query = qs.stringify(json)+'key=4fck9x4dqa6linkman3ho9b1quarto49x0yp706qi5185o&time='+time
    json.time = time
    json.sign = crypto.createHash('sha256').update(query).digest('hex');
    let body=qs.stringify(json)
    if(methods==='get'){
        let config = {
            url: `${host}${url}?${body}`,
            headers: Object.assign({}, JSON.parse(hd),{'Cookie':tfbhd})
        }
        config.headers['User-Agent'] = UA || 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.17(0x17001126) NetType/WIFI Language/zh_CN';
        config.headers['Content-Length'] = body.length;
        return config
    }else if(methods==='post'){
        let config = {
            url: `${host}${url}`,
            headers: Object.assign({}, JSON.parse(hd),{'Cookie':tfbhd}),
            body:body
        }
        config.headers['User-Agent'] = UA || 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.17(0x17001126) NetType/WIFI Language/zh_CN';
        config.headers['Content-Length'] = body.length;
        return config
    }
    
}
function RT(X, Y) {
    do {
        var rt = Math.floor(Math.random() * Y);
    } while (rt < X);
    return rt;
}
/***************************************************************/
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
