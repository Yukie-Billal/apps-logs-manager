import {Router} from 'express'
import fs from "fs";
const router = Router()

router.get('/', (req, res) => {
  const isi = fs.readFileSync('./views/index.html', 'utf-8')
  res.send(isi)
})

export default router