require('dotenv').config()
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import connectDB from './database/mongo'
import router from './routes/index.routes'

const app = express()

app.use(helmet())

app.use(cors({ origin: true, credentials: true }))

app.use(express.json({ limit: '1mb' }))

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.status(200).json({ message: 'Server Up and Running!' }))

app.use('/api', router)

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
