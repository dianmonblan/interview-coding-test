const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new LowCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class LowCoverageProduct extends ProductAbstract {
    /**
     * Represents a low coverage product
     * @constructor
     * @param {number} sellIn
     * @param {number} price
     */
    constructor(sellIn, price) {
        super('Low Coverage', sellIn, price);
    }
}

module.exports = LowCoverageProduct;