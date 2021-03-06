const expect = require('chai').expect;

// Custom Models
const models = require('../src/models');

describe("Co Test", function () {
  // it("should foo", function () {
  //   const coTest = new models.CarInsurance([new models.Product("foo", 0, 0)]);
  //   const products = coTest.updatePrice();
  //   expect(products[0].name).equal("foo");
  // });

  describe("Product", function () {
    it("the price of a product is never negative", function () {
      try {
        new models.Product("Medium Coverage", 15, -10)  
      } catch (error) {
        expect(error.message).equal('the price of a product is never negative');
      }

      const productOne = new models.Product("Medium Coverage", 15, 0);
      expect(productOne.price).equal(0);

      const productTwo = new models.Product("Medium Coverage", 15, 10);
      expect(productTwo.price).equal(10);
    });
    
    it("the price of a product is never more than 50 except `Mega Coverage` as such its price is 80 and it never alters", function () { });
  });

  describe("Medium Coverage", function () {
    it("once the sell by date has passed, price degrades twice as fast", function () { });
    it("being a legendary product, never has to be sold or decreases in price", function () { });
  });

  describe("Full Coverage", function () {
    it("once the sell by date has passed, price degrades twice as fast", function () { });
    it("actually increases in price the older it gets", function () { });
  });

  describe("Low Coverage", function () {
    it("once the sell by date has passed, price degrades twice as fast", function () { });
  });

  describe("Mega Coverage", function () {
    it("once the sell by date has passed, price degrades twice as fast", function () { });
  });

  describe("Special Full Coverage", function () {
    it("once the sell by date has passed, price degrades twice as fast", function () { });

    describe("increases in price as its sellIn value approaches", function () {
      it("price increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but", function () { });
      it("price drops to 0 when no more days left (and the product is not valid anymore", function () { });
    });
  });

  describe("Super Sale", function () {
    it("once the sell by date has passed, price degrades twice as fast", function () { });
    it("products degrade in price twice as fast as normal Products", function () { });
  });
});
