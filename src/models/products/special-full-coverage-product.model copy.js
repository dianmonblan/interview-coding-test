const ProductAbstract = require("./product-abstract.model");

/**
 * @class
 * @classdesc Create new SpecialFullCoverageProduct
 * @summary
 * @extends ProductAbstract
 */
class SpecialFullCoverageProduct extends ProductAbstract {
    /**
     * Update price based on age
     * @override
     * @summary Simulate Abstract method: Implements Template Method(design pattern)
     */
    updatePrice() {
        if (this.price < ProductAbstract.maximumPrice) {
            this.price = this.price + 1;

            if (this.sellIn < 11 && this.price < ProductAbstract.maximumPrice)
                this.price = this.price + 1;

            if (this.sellIn < 6 && this.price < ProductAbstract.maximumPrice)
                this.price = this.price + 1;
        }

        this.sellIn = this.sellIn - 1;

        if (this.sellIn < 0)
            this.price = this.price - this.price;
    }
}

module.exports = SpecialFullCoverageProduct;