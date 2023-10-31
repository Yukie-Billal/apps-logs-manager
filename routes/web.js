import {Router} from 'express'
import fs from "fs";
import {removeLog} from "../create-logs.js";
const router = Router()

router.get('/', (req, res) => {
  const isi = fs.readFileSync('./views/index.html', 'utf-8')
  res.send(isi)
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.send(removeLog(id))
})

export default router