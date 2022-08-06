const sixDigitRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return randomNumber.toString().padStart(6, '0');
};

const fourDigitRandomNumber = () => {
  const fourDigitNumber = Math.floor(Math.random() * 10000);
  return fourDigitNumber.toString().padStart(4, '0');
};

const threeDigitRandomNumber = () => {
  const threeDigitNumber = Math.floor(Math.random() * 1000);
  return threeDigitNumber.toString().padStart(3, '0');
};

export {sixDigitRandomNumber, fourDigitRandomNumber, threeDigitRandomNumber};
