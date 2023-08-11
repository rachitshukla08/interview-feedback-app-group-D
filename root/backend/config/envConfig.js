require('dotenv').config()

const envConfig = {
    PORT : process.env.PORT,
    MONGODB_URI : process.env.MONGODB_URI,
    YOU_KNOW_WHO : process.env.JWT_SECRET,
    FRONTEND_URI : process.env.FRONTEND_URI
}

module.exports = envConfig