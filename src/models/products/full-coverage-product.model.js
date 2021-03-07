const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new FullCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class FullCoverageProduct extends ProductAbstract {
    /**
     * Update price based on age
     * @override
     * @summary Simulate Abstract method: Implements Template Method(design pattern)
     */
    updatePrice() {
        if (this.price < ProductAbstract.maximumPrice)
            this.price = this.price + 1;

        this.sellIn = this.sellIn - 1;

        if (this.sellIn < 0 && this.price < ProductAbstract.maximumPrice)
            this.price = this.price + 1;
    }
}

module.exports = FullCoverageProduct;