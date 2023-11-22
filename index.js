import express from 'express'
import bodyParser from 'body-parser'
import {Server} from 'socket.io'

const app = express()
const server = http.createServer(app)
export const io = new Server(server, {
   cors: {
      origin: '*'
   }
})

app.use(bodyParser.json())
app.use(express.static('assets'))

import LogsRouter from './routes/logs.js'
import WebRouter from './routes/web.js'
import * as http from "http";
app.use('/', WebRouter)
app.use('/logs', LogsRouter)

io.on('connection', (socket) => {
   console.log('A user connected');

   socket.on('updated', (msg) => {
      io.emit('updated', msg);
   });

   // Handle disconnect
   socket.on('disconnect', () => {
      console.log('User disconnected');
   });
});


server.listen(3000, "0.0.0.0", () => {
   console.log("run on port 3000")
})
