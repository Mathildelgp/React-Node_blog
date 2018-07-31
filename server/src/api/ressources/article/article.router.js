import express from 'express'
import passport from 'passport'
import articleController from './article.ctrl.js'
import { isAdmin } from '../../middleware/admin.js'

export const articleRouter =  express.Router()

const adminPolicy = [passport.authenticate('jwt', {session:false}), isAdmin]

articleRouter.route('/')
	.post(adminPolicy, articleController.create)
	.get(articleController.findAll)
articleRouter.route('/:id')
	.get(articleController.findOne)
	.put(adminPolicy, articleController.update)	
	.delete(adminPolicy, articleController.delete)