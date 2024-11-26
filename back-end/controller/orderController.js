const orderService = require('../service/orderService');

exports.createOrder = async function (req, res) {
    const order = req.body;

    try {
        const orderToCreate = await orderService.createOrder(order);

        return res.status(200).send(orderToCreate);
    } catch (error) {
        console.log(error);
        return res.status(403).send(error);
    }
}

exports.getOrder = async function (req, res) {
    const searchTerm = req.query.searchTerm;
    try {
        const order = await orderService.getOrder(searchTerm);

        return res.status(200).send(order);
    } catch (error) {
        console.log(error);
        return res.status(403).send(error);
    }
}