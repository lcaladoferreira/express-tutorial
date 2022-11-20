const express = require('express');
const path = require('path');
const app = express();
const { products } = require('./data')

// setup static and middleware
app.use(express.static('./public'))

//adding for statis in public folder 
// app.get('/', (req, res)=>{

//     res.sendFile(path.resolve(__dirname,'./index.html'));
// })

//api rest exemple 
app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product)=>{
        //destructuring 3 products properties from the json exemple
        const { id, name, image} = product
        return { id, name, image}
    })
    res.json(newProducts)
})

//dynamic routes params exemple
app.get('/api/products/:id', (req, res)=>{
    const { id } = req.params

    const singleProduct = products.find(
        (product)=>product.id === Number(id)
    )
    if(!singleProduct){
        return res.status(404).send("the product does not exist")
    }
        res.json(singleProduct)
})



// query product example
app.get('/api/v1/query', (req, res)=>{
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
})



// html error pages 
app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})

//server local storage setup
app.listen(3001, () => {
    console.log('listening on 3001')
})

