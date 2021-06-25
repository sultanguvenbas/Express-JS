const express = require('express');
const app = express.Router();

//This is to parse through incoming data through your HTTP requests
app.use(express.json());

let accounts = [
    {
        "id": 1,
        "username": "paulhal",
        "role": "admin"
    },
    {
        "id": 2,
        "username": "johndoe",
        "role": "guest"
    },
    {
        "id": 3,
        "username": "sarahjane",
        "role": "guest"
    }
];

app.get('/', (request,response)=>{
    response.json(accounts);

})

app.get('/:id', (req, res) => {
    const accountId = Number(req.params.id);
    const getAccount = accounts.find((account) => account.id === accountId);

    if (!getAccount) {
        res.status(500).send('Account not found.')
    } else {
        res.json(getAccount);
    }
});
//!!!!!!!!!!!!!!!!!

app.post('/accounts', (request, response) => {
    const incomingAccount = request.body;

    accounts.push(incomingAccount);

    response.json(accounts);
});


//export this router to use in our index.js
module.exports = app;




