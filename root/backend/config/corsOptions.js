//const allowedOrigins = ['http://localhost:3000']
const envConfig = require('./envConfig')
const corsOptions = {
    origin: envConfig.FRONTEND_URI,
    optionsSuccessStatus: 200 // For legacy browser support
}

module.exports = corsOptions