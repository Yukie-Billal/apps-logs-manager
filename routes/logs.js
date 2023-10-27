import {Router} from 'express'

const router = Router()

import {getAllLogs, saveLogs} from '../create-logs.js'

router.get('/', (req, res) => {
    res.json(getAllLogs())
})

router.post('/', (req, res) => {
    const {date, log, category} = req.body
    saveLogs(date, log, category)
    res.json({date, log, category}).status(200)
})

export default router
