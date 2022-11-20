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




// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     console.log('user hit the resource')
//     res.status(200).send('home page')
// })

// app.get('/about', (req, res)=>{
//     res.status(200).send("about page")
// })

// app.all('*', (req, res) =>{
//     res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(3001, ()=>{
//     console.log('listening on 3001')
// })


// //app.get, app.post, app.put, app.use, app.all, 

