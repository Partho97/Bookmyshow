const mysql = require('mysql');

const Schema = user-schema;

const AddressSchema = new Schema({
    street: String,
    postalCode: String,
    city: String,
    country: String
});

module.exports =  mysql.model('address', AddressSchema);