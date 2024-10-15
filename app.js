const validateCardNumber = (cardNumber) => {
  let clearCardNumber = cardNumber.replace(/-/g, "");
  let cardNumberLength = clearCardNumber.length % 2;
  let total = 0;

  for (let i = 0; i < clearCardNumber.length; i += 1) {
    let cartValue = clearCardNumber[i];

    if(i % 2 === cardNumberLength) {
      cartValue *= 2;
    } else if (cartValue > 9) {
      cartValue -= 9;
    }

    total += cartValue;
  }

  return total % 10 === 0;
};

console.log(validateCardNumber("4561-2612-1234-5467"));
console.log(validateCardNumber("4561-2612-1234-5464"));