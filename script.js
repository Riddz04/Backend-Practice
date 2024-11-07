require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('How u doin?')
})

app.get('/twitter',(req,res)=>{
    res.send('riddhidotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at riddhi learns</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Serve at http://localhost:${port}`)
})
