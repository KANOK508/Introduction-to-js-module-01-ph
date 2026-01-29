/*


In JavaScript we mainly use == (double equal) and === (triple equal) to compare values — but they behave very differently.

1️⃣ Double Equal == → Loose Equality

👉 What it does

Compares values only

Automatically converts types if needed (type coercion)

Example
5 == "5"     // true


🔍 Why?

"5" (string) is converted to 5 (number)

Then comparison happens → 5 == 5 → ✅ true

More examples
0 == false    // true
null == undefined  // true


⚠️ Problem

Automatic conversion can cause unexpected bugs

2️⃣ Triple Equal === → Strict Equality ✅ (Recommended)

👉 What it does

Compares value AND data type

❌ No type conversion

Example
5 === "5"    // false


🔍 Why?

5 → number

"5" → string

Different types → ❌ false

More examples
0 === false     // false
null === undefined  // false

🧠 Visual Comparison
Comparison	Result	Reason
5 == "5"	true	Type converted
5 === "5"	false	Different types
true == 1	true	Coercion
true === 1	false	No coercion
✅ Which one should YOU use?

👉 Use === in almost all cases
It is:

Safer

Predictable

Professional JS practice 💼

Example (Best Practice)
let age = "18";

if (age === 18) {
  console.log("Adult");
} else {
  console.log("Not adult");
}


Output:

Not adult


👉 Because string ≠ number (correct behavior)

🧩 When is == used?

Rarely. Sometimes you’ll see:

if (value == null) {
  // checks both null and undefined
}


But even this is advanced usage.

🔑 Final Rule to Remember

Always use === unless you clearly understand why you need ==.

If you want, I can also explain this with a real-life analogy, a memory trick, or practice questions for you 😄



*/