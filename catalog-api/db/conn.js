const mongoose = require('mongoose');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost'
const MONGO_DB = process.env.MONGO_DB || 'gorry'
const MONGO_PORT = process.env.MONGO_PORT || '27017'

module.exports = mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`, {
    useNewUrlParser: true,
    useCreateIndex: true
});