var Faker = require('../lib');
var faker = new Faker({ locales: require('../lib/locales'), locale: 'de' });

var randomName =  faker.name.firstName();

console.log(randomName);

randomName =  faker.name.lastName();

console.log(randomName);

randomName =  faker.internet.email();

console.log(randomName);


randomName =  faker.address.zipCode();

console.log(randomName);

randomName =  faker.address.zipCode();

console.log(randomName);

randomName =  faker.internet.url();

console.log(randomName);


randomName =  faker.phone.phoneNumber();

console.log(randomName);

randomName  = faker.date.dateFormat();


console.log(randomName);



randomName  = faker.name.title();


console.log(randomName);


randomName  = faker.bank.iban();


console.log(randomName);