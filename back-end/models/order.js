const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');


const OrderSchema = new Schema({
    id: { type: String, required: true, unique: true },
    client_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    cpf: { type: String, required: true },
    address: { type: String, required: false },
    is_external_service: { type: Boolean, required: true },
    equipment_name: { type: String, required: true },
    serial_number: { type: String, required: true },
    defect_description: { type: String, required: true },
    budget: { type: String, required: true },
    order_status: { type: String, required: true }
});

const Order = mongoose.model(
    "Order",
    OrderSchema,
    "order"
  );

exports.create = async function(order) {
    try {
        return await Order.create({ id: uuidv4(), ...order });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.get = async function(searchTerm) {
    try {
        return await Order.findOne({ $or: [
            { cpf: searchTerm },
            { serial_number: searchTerm }
        ] });
    } catch (error) {
        console.log(error);
        throw error;
    }
}