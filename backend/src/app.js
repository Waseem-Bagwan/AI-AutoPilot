import express from 'express'
import eventRouter from './routes/event.route.js'

const app = express()

app.use(express.json())

app.use("/api/v1/event",eventRouter)

export default app
