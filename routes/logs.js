import {Router} from 'express'

const router = Router()

import {getAllLogs} from '../create-logs.js'

router.get('/', (req, res) => {
    res.json(getAllLogs())
})


export default router
