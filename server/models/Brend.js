const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const BrendSchema = new Schema({
    value: {
        type: String
    },
    label: {
        type: String
    },
});

module.exports = { Brend:  mongoose.model('brend', BrendSchema)};