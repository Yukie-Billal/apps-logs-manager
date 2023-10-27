import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

import LogsRouter from './routes/logs.js'
import WebRouter from './routes/web.js'
app.use('/', WebRouter)
app.use('/logs', LogsRouter)

app.listen(5000, "0.0.0.0", () => {
   console.log("run on port 5000")
})
