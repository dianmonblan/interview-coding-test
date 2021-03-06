class Product {
  constructor(name, sellIn, price) {
    if (price < 0)
      throw new Error('the price of a product is never negative');

    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

module.exports = Product;