const express = require('express');
const app = express();
const hbs = require("hbs");
const path = require("path");
const weatherData = require('../utils/weatherData')

const port = 3000;

const dirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(dirPath));

app.get('/', (req,res)=>{
    res.send("Hi");
});

app.get('/weather', (req,res)=>{
    const address = req.query.address
    weatherData(address, (result)=>{
        console.log(result)
    })

});

app.get('*', (req,res)=>{
    res.send('page not found');
})

app.listen(port, ()=>{
    console.log("server is running on port: ", port)
})