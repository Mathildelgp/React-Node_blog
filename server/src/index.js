import express from 'express'
import volleyball from 'volleyball'
import 'dotenv/config'
import { connect } from './config/DB'
import { restRouter } from './api'
import { getConfig } from './config/config'
import passport from 'passport'
import cors from "cors"
import { configJWTStrategy } from './api/middleware/passport-jwt';


const port = process.env.PORT || config.PORT
const config = getConfig(process.env.NODE_ENV)

connect()

const app = express()

app.use(volleyball)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(passport.initialize());
configJWTStrategy();
app.use('/api', restRouter)
app.get('/', (req, res) => {
	res.send('coucou la premiere route')
})

// configuration erreur si une route n'est pas trouvée
app.use((req, res, next) => {
	const error = new Error('Not found')
	error.message = "route invalide"
	error.message = 404
	next(error)
})
// avoir toute les infos jusqu'à ce que le server pete (500)
app.use((error, req, res, next) => {
	res.status(error.status || 500 )
	return res.json({
		error:{
			msg:error.message
		}
	})
})

app.listen( port, (req, res) => {
	console.log(`express marche sur le port ${port}`)
})
