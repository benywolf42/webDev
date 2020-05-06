let faker = require('faker');

for (let index = 0; index < 10; index++) {
    console.log(faker.fake("{{commerce.productAdjective}} {{commerce.productMaterial}} {{commerce.product}} - R${{commerce.price}}"));
}