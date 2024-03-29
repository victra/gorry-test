const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,

    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date },
}, {
    versionKey: false,
    toJSON: { virtuals: true }
})

module.exports = productSchema