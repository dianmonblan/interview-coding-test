const expect = require('chai').expect;

// Custom Models
const models = require('../src/models');

describe('Product Test', function () {
  it('the price of a product is never negative', function () {
    try {
      new models.SpecialFullCoverageProduct('Special Full Coverage', 15, -10);
    } catch (error) {
      expect(error.message).equal('the price of a product is never negative');
    }

    expect(new models.FullCoverageProduct('Full Coverage', 15, 0).price).equal(0);
    expect(new models.LowCoverageProduct('Low Coverage', 15, 10).price).equal(10);
  });

  it('the price of a product is never more than 50', function () {
    try {
      new models.SpecialFullCoverageProduct('Special Full Coverage', 10, 51);
    } catch (error) {
      expect(error.message).equal('the price of a product is never more than 50');
    }

    expect(new models.FullCoverageProduct('Full Coverage', 2, 50).price).equal(50);
  });

  describe('Medium Coverage', function () {
    it('once the sell by date has passed, price degrades twice as fast', function () {
      let mediumCoverageProduct = new models.MediumCoverageProduct('Medium Coverage', 10, 20);
      mediumCoverageProduct.updatePrice();
      expect(mediumCoverageProduct.price).equal(19);

      mediumCoverageProduct.sellIn = 0;
      mediumCoverageProduct.price = 10;
      mediumCoverageProduct.updatePrice();
      expect(mediumCoverageProduct.price).equal(8);
    });
  });

  describe('Full Coverage', function () {
    it('actually increases in price the older it gets', function () { 
      let fullCoverageProduct = new models.FullCoverageProduct('Full Coverage', 2, 0);
      fullCoverageProduct.updatePrice();
      expect(fullCoverageProduct.price).equal(1);

      fullCoverageProduct.sellIn = 0;
      fullCoverageProduct.price = 2;
      fullCoverageProduct.updatePrice();
      expect(fullCoverageProduct.price).equal(4);
    });
  });

  describe('Low Coverage', function () {
    it('once the sell by date has passed, price degrades twice as fast', function () {
      let lowCoverageProduct = new models.LowCoverageProduct('Low Coverage', 5, 7);
      lowCoverageProduct.updatePrice();
      expect(lowCoverageProduct.price).equal(6);

      lowCoverageProduct.sellIn = 0;
      lowCoverageProduct.price = 2;
      lowCoverageProduct.updatePrice();
      expect(lowCoverageProduct.price).equal(0);
    });
  });

  describe('Mega Coverage', function () {
    it('the price is 80 and it never alters', function () {
      try {
        new models.MegaCoverageProduct('Mega Coverage', 10, 79);
      } catch (error) {
        expect(error.message).equal('`Mega Coverage` as such its price is 80 and it never alters');
      }

      expect(new models.MegaCoverageProduct('Mega Coverage', 2, 80).price).equal(80);
    });

    it('being a legendary product, never has to be sold or decreases in price', function () {
      let megaCoverageProduct = new models.MegaCoverageProduct('Mega Coverage', 2, 80);
      megaCoverageProduct.updatePrice();
      expect(megaCoverageProduct.price).equal(80);
    });
  });

  describe('Special Full Coverage', function () {
    it('once the sell by date has passed, price degrades twice as fast', function () { });

    describe('increases in price as its sellIn value approaches', function () {
      let specialFullCoverageProduct = new models.SpecialFullCoverageProduct('Special Full Coverage', 12, 20);

      it('once the sell by date has passed, price degrades twice as fast', function () {
        specialFullCoverageProduct.updatePrice();
        expect(specialFullCoverageProduct.price).equal(21);

        specialFullCoverageProduct.sellIn = 0;
        specialFullCoverageProduct.updatePrice();
        expect(specialFullCoverageProduct.price).equal(0);
      })

      it('price increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but', function () { 
        specialFullCoverageProduct.sellIn = 10;
        specialFullCoverageProduct.price = 20;
        specialFullCoverageProduct.updatePrice();
        expect(specialFullCoverageProduct.price).equal(22);
      });

      it('price drops to 0 when no more days left (and the product is not valid anymore', function () {
        specialFullCoverageProduct.sellIn = 5;
        specialFullCoverageProduct.price = 20;
        specialFullCoverageProduct.updatePrice();
        expect(specialFullCoverageProduct.price).equal(23);
      });
    });
  });

  describe('Super Sale', function () {
    it('products degrade in price twice as fast as normal Products', function () { 
      let superSaleProduct = new models.SuperSaleProduct('Super Sale', 3, 6)
      superSaleProduct.updatePrice();
      expect(superSaleProduct.price).equal(4);

      superSaleProduct.sellIn = 0;
      superSaleProduct.updatePrice();
      expect(superSaleProduct.price).equal(1);
    });
  });
});