const products = require('./products');
const CarInsurance = require('./car-insurance.model');

module.exports = {
    CarInsurance,
    ...products
}