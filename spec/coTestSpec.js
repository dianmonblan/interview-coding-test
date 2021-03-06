const expect = require('chai').expect;

// Custom Models
const models = require('../src/models');

describe("Co Test", function() {
  it("should foo", function() {
    const coTest = new models.CarInsurance([ new models.Product("foo", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("foo");
  });
});
