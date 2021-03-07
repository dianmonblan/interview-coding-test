/**
 * @class
 * @classdesc Product main
 * @summary Recommendation: Abstract class to avoid creating direct instances of the class. Example of declaration: `abstract class ProductAbstract {}`
 */
class ProductAbstract {
  /**
   * Set price
   * @param {number} price
   */
  set price(price) {
    this.minimalPrice(price);
    this.maximumPrice(price);
    this._price = price;
  }

  /**
   * Get price
   * @returns {number}
   */
  get price() {
    return this._price;
  }

  /**
   * @static
   * @type {number}
   */
  static minimalPrice = 0;

  /**
   * @static
   * @type {number}
   */
  static maximumPrice = 50;

  /**
   * Represents a product
   * @constructor
   * @param {string} name
   * @param {number} sellIn
   * @param {number} price
   */
  constructor(name, sellIn, price) {
    this.name = String(name);
    this.sellIn = Number(sellIn);
    this.price = Number(price);
  }

  /**
   * Validation the price of a product is never negative
   * @function minimalPrice
   * @override
   * @param {number} price
   */
  minimalPrice(price) {
    if (price < ProductAbstract.minimalPrice)
      throw new Error('the price of a product is never negative');
  }

  /**
   * Validation the price of a product is never more than 50
   * @function maximumPrice
   * @override
   * @param {number} price
   */
  maximumPrice(price) {
    if (price > ProductAbstract.maximumPrice)
      throw new Error('the price of a product is never more than 50');
  }

  /**
   * Update price based on age. This method should be 
   * implemented to its children class.
   * @function updatePrice
   * @summary Recommendation: Abstract method  that defines the skeleton of an algorithm implements Template Method(design pattern). Example of declaration: `abstract updatePrice()`
   */
  updatePrice() { }
}

module.exports = ProductAbstract;