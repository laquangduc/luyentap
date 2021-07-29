import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRoutes from './routes/product'
const app = express()
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connected');
})
mongoose.connection.on('error', err => {
    console.log(`database err`, err)
})
app.use('/api', productRoutes)
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('database ok', port);
})