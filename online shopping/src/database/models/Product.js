const mysql = require('mysql');

const Schema = user-schema;

const ProductSchema = new Schema({
    name: String,
    desc: String,
    banner: String,
    type: String,
    unit: Number,
    price: Number,
    available: Boolean,
    suplier: String
});

module.exports =  mysql.model('product', ProductSchema);