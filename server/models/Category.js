const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CategorySchema = new Schema({
    title: {
        type: String,
    },
    images: {
        type: Array,
        default: []
    },
    
    value: {
        type: String
    },
    label: {
        type: String
    },
});

module.exports = { Category: mongoose.model('category', CategorySchema)};