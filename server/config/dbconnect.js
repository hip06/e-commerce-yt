const { default: mongoose } = require('mongoose')
mongoose.set('strictQuery', false)
const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        if (conn.connection.readyState === 1) console.log('DB connection is successfully!')
        else console.log('DB connecting');

    } catch (error) {
        console.log('DB connection is failed')
        throw new Error(error)
    }
}

module.exports = dbConnect