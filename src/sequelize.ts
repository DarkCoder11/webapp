import { Sequelize } from 'sequelize-typescript'

import { User } from '../src/users/models/user'

const sequelize = new Sequelize({
  database: 'postgres',
  username: 'postgres',
  password: '123',
  host: '127.0.0.1',
  dialect: 'postgres',
  models: [User],
})

export { sequelize }
