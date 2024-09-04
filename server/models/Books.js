const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type : String,
        required : true,
    },
    slug: {
        type : String,
        // required : true,
    },
    description: {
        type : String,
        // required : true,
    },
    thumbnail: {
        type : String,
        // required : true,
    },
    stars: {
        type : Number,
        // required : true,
    },
    category: {
        type : Array,
        // required : true,
    },
    createAt: {
        type : Date,
        default : Date.now(),
        // required : true,
    },
});

module.exports = mongoose.model('Book', BookSchema);