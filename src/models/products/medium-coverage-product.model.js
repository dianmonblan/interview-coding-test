const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new MediumCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class MediumCoverageProduct extends ProductAbstract {
    /**
     * Update price based on age
     * @override
     * @summary Simulate Abstract method: Implements Template Method(design pattern)
     */
    updatePrice() {
        if (this.price > 0)
            this.price = this.price - 1;

        this.sellIn = this.sellIn - 1;

        if (this.sellIn < 0 && this.price > 0)
            this.price = this.price - 1;
    }
}

module.exports = MediumCoverageProduct;