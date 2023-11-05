import {Router} from 'express'
import fs from "fs";
const router = Router()

router.get('/', (req, res) => {
  const isi = fs.readFileSync('./views/login.html', 'utf-8')
  res.send(isi)
})

router.get('/logs-view', (req, res) => {
  const isi = fs.readFileSync('./views/index.html', 'utf-8')
  res.send(isi)
})

router.post('/', (req, res) => {
  console.log(req.body)
  const {username, password} = req.body
  if (!username || !password) return res.status(400).json({message: "error"})
  if (username==="admin" && password==="admin") {
    res.json({"message":"success"})
    return true
  }
  res.status(400).json({"message":"failed"})
})

export default router