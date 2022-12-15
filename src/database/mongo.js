import mongoose from 'mongoose'

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, { keepAlive: true, connectTimeoutMS: 3000 })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error}`)
    })
  mongoose.connection.on('connected', () => {
    console.info('Connected to database successfully')
  })
  mongoose.connection.on('error', (error) => {
    console.error(`Error connecting to database: ${error}`)
  })
}

export default connectDB
