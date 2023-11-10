import express from 'express'

import { UserController } from '../users/user.controller'

const router = express.Router()

router.post('/update-balance', UserController.updateBalance)

export default router
