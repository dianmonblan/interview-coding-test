const ProductAbstract = require("./product-abstract.model");

/**
 * @constant MAXIMUM_PRICE
 * @type {number}
 * @default
*/
const MAXIMUM_PRICE = 80;

/**
 * @class
 * @classdesc Create new MegaCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class MegaCoverageProduct extends ProductAbstract {
    /**
     * Set price
     * @override
     * @param {number} price
     */
    set price(price) {
        this.minimalPrice(price);
        this.maximumPrice(price);
        this._price = price;
    }

    /**
     * Get price
     * @override
     * @returns {number}
     */
    get price() {
        return this._price;
    }
    
    /**
     * Represents a mega coverage product
     * @constructor
     * @param {number} sellIn
     * @param {number} price
     */
    constructor(sellIn, price) {
        super('Mega Coverage', sellIn, price);
    }

    /**
     * Validation price is 80 and it never alters
     * @function maximumPrice
     * @override
     * @param {number} price
     */
    maximumPrice(price) {
        if (price != MAXIMUM_PRICE)
            throw new Error('`Mega Coverage` as such its price is 80 and it never alters');
    }
}

module.exports = MegaCoverageProduct;