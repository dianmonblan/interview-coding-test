const expect = require('chai').expect;

// Custom Models
const models = require('../src/models');

const products = [
    new models.MediumCoverageProduct('Medium Coverage', 10, 20),
    new models.FullCoverageProduct('Full Coverage', 2, 0),
    new models.LowCoverageProduct('Low Coverage', 5, 7),
    new models.MegaCoverageProduct('Mega Coverage', 0, 80),
    new models.MegaCoverageProduct('Mega Coverage', -1, 80),
    new models.SpecialFullCoverageProduct('Special Full Coverage', 15, 20),
    new models.SpecialFullCoverageProduct('Special Full Coverage', 10, 49),
    new models.SpecialFullCoverageProduct('Special Full Coverage', 5, 49),
    new models.SuperSaleProduct('Super Sale', 3, 6)
];

describe('CarInsurance Test', function () {
    it('create empty instance', function () {
        const carInsurance = new models.CarInsurance();
        expect(carInsurance.products.length).equal(0);
    });

    it('create instance with products', function () {
        const carInsurance = new models.CarInsurance(products);
        expect(carInsurance.products.length).equal(9);
    });

    it('update products price', function () {
        const carInsurance = new models.CarInsurance(products);
        carInsurance.updatePrice();
        expect(carInsurance.products[0].price).equal(19);
        expect(carInsurance.products[1].price).equal(1);
        expect(carInsurance.products[2].price).equal(6);
        expect(carInsurance.products[3].price).equal(80);
        expect(carInsurance.products[4].price).equal(80);
        expect(carInsurance.products[5].price).equal(21);
        expect(carInsurance.products[6].price).equal(50);
        expect(carInsurance.products[7].price).equal(50);
        expect(carInsurance.products[8].price).equal(4);
    });
});