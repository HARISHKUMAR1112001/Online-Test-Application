import express, { json} from 'express';
import router from '../Online-Test-Application/router/router.js';

const app = express();
const port = 3000;

app.use(json());
app.use(router);

// app.use(__dirname + '/public');


app.get('/', (req,res) => {
    res.send('Hello Welcome');
})


app.listen(port, () => {
    // console.log(__dirname + '/public');
    console.log(`connection is live at port no. ${port}`);
})