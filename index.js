const { strict } = require('assert');
const express = require('express');
const router = require('./router/router')
require('./schema/config')

const app = express();
const port = 3001;

app.use(express.json());
app.use(router);

app.use(express.static((__dirname + '/public')))

app.get('/', (req,res) => {
    res.send('Hello Welcome');
})


app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})