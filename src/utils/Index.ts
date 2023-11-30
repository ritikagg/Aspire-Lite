export function generateRandomCVV() {
    // Generate a random number between 1 and 999 (inclusive)
    let randomNumber = Math.floor(Math.random() * 999) + 1;

    // If the generated number is less than 100, pad it with leading zeros
    // to ensure it is a three-digit number
    let formattedNumber = randomNumber.toString().padStart(3, "0");

    return formattedNumber;
}

export function generateRandomCardNumber() {
    let randomNumber = "";
    for (let i = 0; i < 16; i++) {
        randomNumber += Math.floor(Math.random() * 10);
    }
    return parseInt(randomNumber, 10);
}

export function randomDebitCardExpiration() {
    // Generate a random month (1 to 12) and year (current year to current year + 10)
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomYear =
        new Date().getFullYear() + Math.floor(Math.random() * 11);

    // Format the month and year as mm/yy
    const formattedMonth = String(randomMonth).padStart(2, "0");
    const formattedYear = String(randomYear).slice(-2);

    const expirationDate = `${formattedMonth}/${formattedYear}`;

    return expirationDate;
}

export function formatDigits(inputNumber: string) {
    // Convert the input number to a string
    const inputString = String(inputNumber);

    // Extract the first 4, next 4, and last 4 digits
    const first4Digits = inputString.slice(0, 4);
    const next4Digits = inputString.slice(4, 8);
    const last4Digits = inputString.slice(8, 12);

    // Format and return the result
    const formattedResult = `${first4Digits}  ${next4Digits}  ${last4Digits}`;
    return formattedResult;
}
