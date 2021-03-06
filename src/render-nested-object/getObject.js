export const getObject = () => {
  const obj = {
    taxi:
      'a car licensed to transport passengers in return for payment of a fare',
    food: {
      sushi:
        'a traditional Japanese dish of prepared rice accompanied by seafood and vegetables',
      apple: {
        Honeycrisp:
          'an apple cultivar developed at the MAES Horticultural Research Center',
        Fuji:
          'an apple cultivar developed by growers at Tohoku Research Station',
        X: {
          a: 'A',
          b: {
            bee: "BEE",
          }
        }
      },
    },
  }

  return obj;
}
