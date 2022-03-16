const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

// app.use('/build', express.static('build'))

app.use(bodyParser.json()) 


app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/api/test', (req, res) => {
  const body = req.body
  res.json({ data: body })
})

app.get('/api/test', (req, res) => {
  res.json({'score': '20'})
})
