import mongoose from 'mongoose';
const bookSchema = new mongoose.Schema({
    title: { // required ma trong form gui len khong co?
        type: String,
        strim: true,
        maxLength: 32,
        required: true,
    },
    description: {
        type: String,
        maxLength: 32,
        required: true,
    },

    image: {
        type: String
    },
    author: {
        type: String,
    },
    category: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);