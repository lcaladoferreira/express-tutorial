const express = require('express');
const path = require('path');
const app = express();


// setup static and middleware
app.use(express.static('./public'))

//adding for statis in public folder 
// app.get('/', (req, res)=>{

//     res.sendFile(path.resolve(__dirname,'./index.html'));
// })

app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})


app.listen(3001, () => {
    console.log('listening on 3001')
})

