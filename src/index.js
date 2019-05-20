import express from 'express';

import users from './routes/users';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Home Page");
});


app.use('/users', users);
app.listen(process.env.PORT, () => {
    console.log('Serer is Up', process.env.PORT);
});