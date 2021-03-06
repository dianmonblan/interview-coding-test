const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new SuperSaleProduct
 * @summary
 * @extends ProductAbstract
 */
class SuperSaleProduct extends ProductAbstract {
    /**
     * Represents a super sale product
     * @constructor
     * @param {number} sellIn
     * @param {number} price
     */
    constructor(sellIn, price) {
        super('Super Sale', sellIn, price);
    }
}

module.exports = SuperSaleProduct;