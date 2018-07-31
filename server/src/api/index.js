import express from 'express'
import { articleRouter } from './ressources/article'
import { userRouter } from './ressources/user'

export const restRouter = express.Router()

restRouter.use('/articles', articleRouter)
restRouter.use('/users', userRouter)