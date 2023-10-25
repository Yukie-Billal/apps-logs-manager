import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({"message": "hello World"})
})

app.listen(5000, "0.0.0.0", () => {
   console.log("run on port 5000")
})
