const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new FullCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class FullCoverageProduct extends ProductAbstract {
    /**
     * Represents a full coverage product
     * @constructor
     * @param {number} sellIn
     * @param {number} price
     */
    constructor(sellIn, price) {
        super('Full Coverage', sellIn, price);
    }
}

module.exports = FullCoverageProduct;