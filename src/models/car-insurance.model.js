const { ProductAbstract } = require("./products");

/**
 * @class
 * @classdesc Create new CarInsurance
 * @summary Abstract class recommendation to avoid creating direct instances of the class example: `abstract class ProductAbstract {}`
 */
class CarInsurance {
  /**
   * Represents a car insurance
   * @constructor
   * @param {ProductAbstract[]} products
   */
  constructor(products = []) {
    this.products = products;
  }

  /**
   * Update products price based on its age
   * @function updatePrice
   * @returns {ProductAbstract[]}
   */
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (!['Full Coverage', 'Special Full Coverage'].includes(this.products[i].name)) {
        if (this.products[i].price > 0 && !['Mega Coverage'].includes(this.products[i].name))
          this.products[i].price = this.products[i].price - 1;
      } else if (this.products[i].price < 50) {
        this.products[i].price = this.products[i].price + 1;

        if (['Special Full Coverage'].includes(this.products[i].name)) {
          if (this.products[i].sellIn < 11 && this.products[i].price < 50)
            this.products[i].price = this.products[i].price + 1;

          if (this.products[i].sellIn < 6 && this.products[i].price < 50)
            this.products[i].price = this.products[i].price + 1;
        }
      }

      if (!['Mega Coverage'].includes(this.products[i].name))
        this.products[i].sellIn = this.products[i].sellIn - 1;

      if (this.products[i].sellIn < 0) {
        if (!['Full Coverage'].includes(this.products[i].name)) {
          if (!['Special Full Coverage'].includes(this.products[i].name)) {
            if (this.products[i].price > 0) {
              if (!['Mega Coverage'].includes(this.products[i].name))
                this.products[i].price = this.products[i].price - 1;
            }
          } else
            this.products[i].price = this.products[i].price - this.products[i].price;
        } else if (this.products[i].price < 50)
          this.products[i].price = this.products[i].price + 1;
      }
    }

    return this.products;
  }
}

module.exports = CarInsurance;