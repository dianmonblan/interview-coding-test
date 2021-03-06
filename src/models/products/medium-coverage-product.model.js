const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new MediumCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class MediumCoverageProduct extends ProductAbstract {
    /**
     * Represents a medium coverage product
     * @constructor
     * @param {number} sellIn
     * @param {number} price
     */
    constructor(sellIn, price) {
        super('Medium Coverage', sellIn, price);
    }
}

module.exports = MediumCoverageProduct;