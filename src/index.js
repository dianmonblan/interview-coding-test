const models = require("./models");

const productsAtDayZero = [
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

const carInsurance = new models.CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
}