import {Router} from 'express'

const router = Router()

import {getAllLogs, saveLogs} from '../utils/logs.js'
router.get('/', (req, res) => {
    res.json(getAllLogs())
})

router.post('/', (req, res) => {
    const {urgent, date= new Date('2023 10 24 11:42:28'), log, category} = req.body
    saveLogs(urgent, date, log, category)
    res.json({urgent, date, log, category}).status(200)
})

export default router
