const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new SpecialFullCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class SpecialFullCoverageProduct extends ProductAbstract {
    /**
     * Represents a special full coverage product
     * @constructor
     * @param {number} sellIn
     * @param {number} price
     */
    constructor(sellIn, price) {
        super('Special Full Coverage', sellIn, price);
    }
}

module.exports = SpecialFullCoverageProduct;