const config = {
	production : {
		secret : process.env.secret,
		MONGO_URI : 'mongodb://mathlgp:890.qsd@ds257551.mlab.com:57551/music-api',
		port : process.env.PORT,
	},
	development : {
		secret : "Ch0c0late is l0ve",
		MONGO_URI : 'mongodb://mathlgp:890.qsd@ds257551.mlab.com:57551/music-api',
		port : 5678,
	}
}

export const getConfig = env => config[env] || config.development