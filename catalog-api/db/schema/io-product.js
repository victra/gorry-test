const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ioProductSchema = new Schema({
    product_id: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    action: String,

    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date },
}, {
    versionKey: false
})

module.exports = ioProductSchema