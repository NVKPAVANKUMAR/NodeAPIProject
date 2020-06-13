const express = require("express");
let dataFile = require('./users.json');
const app = express();

app.get('/api/users', (req, res) => {
    res.send(dataFile);
})

app.get('/api/info', (res) => {
    res.send("Welcome to Nodejs API..!");
});

app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    var result = dataFile.data.filter((chain) => {
        return chain.id == id;
    })[0];
   
    if (result) {
        res.send(result);
    } else {
         res.send('this user is not found');
    }
});

app.listen(PORT =  process.env.PORT || 5000, () => {
    console.log('Server is started, please call API Port no - ', PORT);
});
