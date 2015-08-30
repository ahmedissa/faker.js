function Bank (faker) {


  this.iban = function () {
    return faker.random.arrayElement(faker.definitions.bank.iban);
  };

}

module['exports'] = Bank;