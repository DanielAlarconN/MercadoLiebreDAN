const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath))

const puerto = process.env.Port || 3000

app.listen(puerto , function() {
    console.log(`corriendo puerto ${puerto}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get("/registro", function(req,res){
    let htmlArchivo = path.resolve(__dirname, './views/registro.html')
    res.sendFile(htmlArchivo);
})

app.get("/log", function(req,res){
    let htmlArchivo = path.resolve(__dirname, './views/log.html')
    res.sendFile(htmlArchivo)})
