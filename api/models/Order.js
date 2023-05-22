const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
    {
        userId:{type: String, required: true},
        products: [
            {
                title:{
                    type: String
                },
                _id:{
                    type:String
                },
                quantity:{
                    type: Number,
                    default: 1
                },

            }
        ],
        amount: {type: Number, required: true},
        status: {type: String, default: 'pendiente'},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Order', OrderSchema)