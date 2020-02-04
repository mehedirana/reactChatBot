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