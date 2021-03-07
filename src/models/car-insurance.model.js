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
    for (var i = 0; i < this.products.length; i++)
      this.products[i].updatePrice();

    return this.products;
  }
}

module.exports = CarInsurance;