import { Request, Response } from 'express'

import { sequelize } from '../sequelize'
import { UserService } from './user.service'

export class UserController {
  static async updateBalance(req: Request, res: Response): Promise<void> {
    const { userId, amount } = req.body

    try {
      await UserService.updateUserBalance(userId, amount, sequelize)
      res.json({ message: 'Balance updated successfully' })
    } catch (error) {
      console.error(error)
      const errorMessage = (error as Error).message || 'Internal Server Error'
      res.status(500).json({ message: errorMessage })
    }
  }
}
