
const express = require('express');
const morgan = require ('morgan');
const app = express()
const port = 3000
//  morgan config
app.use(morgan('dev'))

app.get('/', (req,res) => {
  res.json({message : 'Welcome to my REST API!'})
})

// get all todos
// get todo by id
// create todo 
// update todo
// delete todo 

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})