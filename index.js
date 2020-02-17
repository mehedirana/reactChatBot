const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const fetch = require("node-fetch");

app.use(bodyParser.json());
app.use(express.json());


require('./routes/dialogFlowRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);

/*
// Firing up the server on selected port
SERVER.listen(PORT);

SERVER.on("listening", () => {
    console.log("[Server]::LISTEN:%s", PORT);
});

// Callback function for checking connecting or error
SERVER.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
});
*/







/*const wakeUpDyno = (url, interval) => {
    const milliseconds = interval * 60000;
    setTimeout(() => {
        fetch(url);
    }, milliseconds);
};*/

/*
process
  .on('SIGTERM', shutdown('SIGTERM'))
  .on('SIGINT', shutdown('SIGINT'))
  .on('uncaughtException', shutdown('uncaughtException'));

setInterval(console.log.bind(console, 'tick'), 1000);
http.createServer((req, res) => res.end('hi'))
  .listen(process.env.PORT || 5000, () => console.log('Listening'));

function shutdown(signal) {
  return (err) => {
    console.log(`${ signal }...`);
    if (err) console.error(err.stack || err);
    setTimeout(() => {
      console.log('...waited 5s, exiting.');
      process.exit(err ? 1 : 0);
    }, 5000).unref();
  };
}*/
//module.exports = wakeUpDyno;
//socket = io.listen(process.env.PORT);