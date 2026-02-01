const today = new Date();
console.log(today)
const date = new Date('2062-10-19')
console.log(`------------------------------------------`)
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091, 0, 26)
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));

// unix epoc


/**
 
1. The "Zero-Indexed" TrapIn JavaScript, Months are 0-indexed, but Days of the month are 1-indexed.

MethodWhat it returnsRange.getMonth()The month0 (Jan) to 11 (Dec).getDate()Day of the month1 to 31.getDay()Day of the week0 (Sun) to 6 (Sat)Why your code gave those results:date.getMonth() for October returned 9.date.getDay() returned a number representing the day of the week (0-6), not the "19th." To get the 19th, you should use .getDate().2. Understanding the Unix EpochThe Unix Epoch is the "Big Bang" of computer time. It started on January 1, 1970, at 00:00:00 UTC.JavaScript stores dates as the number of milliseconds that have passed since that exact moment.Positive number: A date after 1970.Negative number: A date before 1970.3. Your Interactive Learning ModuleCopy and run this code. Read the comments—they explain why the output happens.JavaScript// --- 1. CREATING DATES ---
const now = new Date(); // Current time
const explicit = new Date(2026, 0, 1); // Jan 1, 2026 (Month 0 = Jan)

// --- 2. GETTING DATA ---
const halloween = new Date('2026-10-31');
console.log(halloween.getMonth()); // Output: 9 (Because Oct is the 10th month, and 10 - 1 = 9)
console.log(halloween.getDate());  // Output: 31 (The actual day)

// --- 3. SETTING DATA (Muting/Changing) ---
let birthday = new Date(2026, 4, 20); // May 20
birthday.setMonth(11); // Changes May to December
console.log(birthday.toLocaleDateString()); // Shows the date in a readable format

// --- 4. THE EPOCH (The "Secret Number") ---
console.log(now.getTime()); // This huge number is milliseconds since 1970!
4. Pro-Tips for SuccessAlways remember: If you see 0, think "January" or "Sunday."Use .toLocaleString(): It’s your best friend for turning weird date objects into human-friendly text like "26/11/2091".

 */

console.log(`---------------------------------------`)
for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}

