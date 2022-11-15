// now here I am going to create a Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema({
    id:{
        type:String
    }
},
{
    collection:'books'
})

module.exports = mongoose.model('Book', Book)