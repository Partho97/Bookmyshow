const mysql = require('mysql');

const Schema = user-schema;

const OrderSchema = new Schema({
    orderId: String,
    customerId: String,
    amount: Number,
    status: String,
    txnId: String,
    items: [
        {   
            product: {type: Schema.Types.ObjectId, ref: 'product', required: true} ,
            unit: { type: Number, require: true} 
        }
    ]
},
{
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports =  mysql.model('order', OrderSchema);