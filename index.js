const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("Hello Node-Express!")
})


app.get('/api/info', (req, res) => {
    res.send("Welcome to Nodejs Express API..!");
});


app.listen(PORT = process.env.PORT || 5000, () => {
    console.log('Server is started, please call API Port no - ', PORT);
});