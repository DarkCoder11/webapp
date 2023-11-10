import express, { json, urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { sequelize } from './sequelize'
import userRoutes from './routes/userRoutes'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(json())
app.use(cookieParser())
app.use(urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true }))

app.use('/api/users', userRoutes)

const startServer = async () => {
  try {
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Error syncing with the database:', error)
  }
}
startServer()
