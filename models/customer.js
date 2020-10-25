const Joi = require('joi')
const mongoose = require('mongoose')

const Customer = mongoose.model("Customer", new mongoose.Schema({
    isGold: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
}));

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().required().min(3).max(30),
        isGold: Joi.boolean(),
        phone: Joi.number().min(3)
    }
    return Joi.validate(customer, schema)
}

exports.Customer = Customer;
exports.validate = validateCustomer;