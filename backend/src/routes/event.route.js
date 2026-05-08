import express from 'express'
import { eventController } from '../controllers/event.controller.js'

const eventRouter = express.Router()

eventRouter.get("/data",eventController)

export default eventRouter