const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('home page')
})

app.get('/about', (req, res)=>{
    res.status(200).send("about page")
})

app.all('*', (req, res) =>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(3001, ()=>{
    console.log('listening on 3001')
})


//app.get, app.post, app.put, app.use, app.all, 

