import mongoose from "mongoose"
import "dotenv/config"
const { DB_url } = process.env

mongoose.Promise = global.Promise;
export const connect = () => {
	mongoose.connect(DB_url,  { useNewUrlParser: true })
	console.log('mongo marche')
}