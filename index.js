const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(express.json());


require('./routes/dialogFlowRoutes')(app);



const PORT = process.env.PORT || 6000;
app.listen(PORT);
//socket = io.listen(process.env.PORT);