//Get `100` using `+` operator and numeric value `10`.
console.log(Number(10 + String(Number(false))));

//You have following string: `Amazon annual revenue of US$232.887 billion` extract revenue and count monthly income.
const followingString = 'Amazon annual revenue of US$232.887 billion';
const extractRevenue = parseFloat(followingString.slice(followingString.indexOf('$') + 1)) * 1e9;
const countMonthlyIncome = extractRevenue / 12;
console.log(extractRevenue);
console.log(countMonthlyIncome);

//Declare variable which will contain logs counter. Log few times with updating this value accordingly.
let counter = 0;
console.log(++counter);
console.log(counter++);
console.log(counter);
