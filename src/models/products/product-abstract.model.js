/**
 * @constant MINIMAL_PRICE
 * @type {number}
 * @default
*/
const MINIMAL_PRICE = 0;

/**
 * @constant MAXIMUM_PRICE
 * @type {number}
 * @default
*/
const MAXIMUM_PRICE = 50;

/**
 * @class
 * @classdesc Product main
 * @summary Abstract class recommendation to avoid creating direct instances of the class example: `abstract class ProductAbstract {}`
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
   * Represents a product.
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
    if (price < MINIMAL_PRICE)
      throw new Error('the price of a product is never negative');
  }

  /**
   * Validation the price of a product is never more than 50
   * @function maximumPrice
   * @override
   * @param {number} price
   */
  maximumPrice(price) {
    if (price > MAXIMUM_PRICE)
      throw new Error('the price of a product is never more than 50');
  }
}

module.exports = ProductAbstract;