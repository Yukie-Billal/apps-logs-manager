import {Router} from 'express'
const router = Router()

import {getAllLogs, removeLog, saveLogs} from '../utils/logs.js'
import {io} from "../index.js";

router.get('/', (req, res) => {
    res.status(200).json(getAllLogs())
})

router.post('/', (req, res) => {
    try {
        const {urgent, date= new Date(), log, category} = req.body
        if (!urgent || !log || !category) return res.status(400).json({message: 'Invalid parameter'})
        saveLogs(urgent, date, log, category)
        res.status(200).json({urgent, date, log, category})
        io.emit('updated')
    } catch (e) {
        res.status(500).json({"message": "Internal server error"})
    }
})

router.delete('/:id', (req, res) => {
    try {
        res.status(200).json({message: removeLog(req.params.id)})
    } catch (e) {
        res.status(500).json({"message": "Internal server error"})
    }
})

export default router
