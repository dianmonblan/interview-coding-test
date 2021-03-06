const models = require("./models");

const productsAtDayZero = [
    new models.MediumCoverageProduct(10, 20),
    new models.FullCoverageProduct(2, 0),
    new models.LowCoverageProduct(5, 7),
    new models.MegaCoverageProduct(0, 80),
    new models.MegaCoverageProduct(-1, 80),
    new models.SpecialFullCoverageProduct(15, 20),
    new models.SpecialFullCoverageProduct(10, 49),
    new models.SpecialFullCoverageProduct(5, 49),
    new models.SuperSaleProduct(3, 6)
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