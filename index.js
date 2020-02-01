const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
//const fetch = require("node-fetch");

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
};

module.exports = wakeUpDyno;*/
//socket = io.listen(process.env.PORT);