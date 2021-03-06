const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new MegaCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class MegaCoverageProduct extends ProductAbstract {
    /**
     * Represents a mega coverage product
     * @constructor
     * @param {number} sellIn
     * @param {number} price
     */
    constructor(sellIn, price) {
        super('Mega Coverage', sellIn, price);
    }
}

module.exports = MegaCoverageProduct;