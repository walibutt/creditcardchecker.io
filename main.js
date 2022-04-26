// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = (validNumbers) => {
    const numSumInitial = 0;
    // shallow copy of array
    let validCheck = validNumbers.slice(); 
    // iterate backwards and skip every other number
    for (
      let i = validCheck.length - 2;
      i >= 0;
      i -= 2 
    ) {
      // every other digit doubled
      validCheck[i] *= 2; 
      // number greater than 9 reduced by 9
      if (validCheck[i] > 9) {
        (validCheck[i] -= 9);
      } 
    }
    const numSum = validCheck.reduceRight((a, b) => a + b, numSumInitial); 
    // check if numbers are valid
    let result = (numSum % 10 === 0 ? true : false); 
    // return check (true or false)
    return result; 
  };
  /*
  console.log(validateCred(invalid1));
  console.log(validateCred(invalid2));
  console.log(validateCred(invalid3));
  console.log(validateCred(invalid4));
  console.log(validateCred(invalid5));
  */
  const findInvalidCards = (invalidNumbers) => {
    let invalidCheck = []; // empty array for invalid numbers
    for (let i = 0; i < invalidNumbers.length; i++) {
      if (validateCred(invalidNumbers[i]) === false) {
        invalidCheck.push(invalidNumbers[i]);
      }
    } // loop through false output from validateCred function and push into invalidCheck array
    return invalidCheck;
  };
  
  //console.log(findInvalidCards(batch))
  
  const idInvalidCardCompanies = (invalidCompany) => {
    let cardCompany = []; // empty array for companies
    let invalidCards = findInvalidCards(invalidCompany); // find invalid cards to check
    for (let i = 0; i < invalidCards.length; i++) {
      let firstDigit = invalidCards[i][0]; // get first digit of invalid card numbers
      if (firstDigit === 3 && !cardCompany.includes("Amex (American Express)")) {
        cardCompany.push("Amex (American Express)");
      } else if (firstDigit === 4 && !cardCompany.includes("Visa")) {
        cardCompany.push("Visa");
      } else if (firstDigit === 5 && !cardCompany.includes("Mastercard")) {
        cardCompany.push("Mastercard");
      } else if (firstDigit === 6 && !cardCompany.includes("Discover")) {
        cardCompany.push("Discover");
      } else {
        console.log("Company Not Found");
      }
    }
    return cardCompany;
  };
  
  console.log(idInvalidCardCompanies(batch));
  