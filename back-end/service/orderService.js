const Order = require('../models/order');

exports.createOrder = async function (order) {
    try {
        const { 
            clientName: client_name,
            phoneNumber: phone_number,
            cpf,
            address,
            isExternalService: is_external_service,
            equipmentName: equipment_name,
            serialNumber: serial_number,
            defectDescription: defect_description,
            budget,
            status: order_status,
        } = order;

        const parsedOrder = { 
            client_name, 
            phone_number, 
            cpf, 
            address, 
            is_external_service, 
            equipment_name, 
            serial_number, 
            defect_description, 
            budget, 
            order_status 
        };

        return await Order.create(parsedOrder);
    } catch (error) {
        console.log(error);
        throw error;
    }    
}

exports.getOrder = async function (searchTerm) {
    try {
        const order = await Order.get(searchTerm);
        return {
            clientName: order.client_name,
            phoneNumber: order.phone_number,
            cpf: order.cpf,
            address: order.address,
            isExternalService: order.is_external_service,
            equipmentName: order.equipment_name,
            serialNumber: order.serial_number,
            defectDescription: order.defect_description,
            budget: order.budget,
            status: order.order_status
        }
    } catch (error) {
        console.log(error);
        throw error;
    }    
}