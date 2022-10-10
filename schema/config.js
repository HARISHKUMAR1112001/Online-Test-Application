import { connect } from 'mongoose';

connect('mongodb://localhost:27017/Quiz_APP', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection successfull!');
}).catch((e) => {
    console.log('Connection failed!');
})