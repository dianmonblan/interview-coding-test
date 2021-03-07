const ProductAbstract = require("./product-abstract.model");

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
     * @static
     * @type {number}
     */
    static maximumPrice = 80;

    /**
     * Validation price is 80 and it never alters
     * @function maximumPrice
     * @override
     * @param {number} price
     */
    maximumPrice(price) {
        if (price != MegaCoverageProduct.maximumPrice)
            throw new Error('`Mega Coverage` as such its price is 80 and it never alters');
    }

    /**
     * Update price based on age
     * @override
     * @summary Simulate Abstract method: Implements Template Method(design pattern)
     */
    updatePrice() { }
}

module.exports = MegaCoverageProduct;