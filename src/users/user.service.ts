import { Sequelize } from 'sequelize-typescript'

import { User } from './models/user'

export class UserService {
  static async updateUserBalance(
    userId: number,
    amount: number,
    sequelize: Sequelize,
  ): Promise<void> {
    return sequelize.transaction(async (transaction) => {
      const user = await User.findByPk(userId, { transaction })

      if (!user) {
        throw new Error('User not found')
      }

      if (user.balance - amount < 0) {
        throw new Error('Insufficient funds')
      }

      await user.update({ balance: user.balance - amount }, { transaction })
    })
  }
}
