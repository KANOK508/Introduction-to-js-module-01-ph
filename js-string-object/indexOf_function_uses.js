/* 
let str = "Mississippi";
console.log(str.indexOf("i", 3));

🔍 How indexOf() works
--------------------SYNTAX--------------------------------
string.indexOf(searchValue, startIndex)

searchValue → what you’re looking for ("i")
startIndex → where the search starts (index 3)
-----------------------------------------------------------------------

It returns the index of the first match found after (or at) startIndex
If nothing is found → returns -1

----------------------------------------eXAMPLE---------------

📍 Index positions in "Mississippi"

Index:  0 1 2 3 4 5 6 7 8 9 10
Chars:  M i s s i s s i p p  i
🔎 Search starts from index 3
Characters checked:

index 3 → s ❌

index 4 → i ✅ (first match)

✅ Final Output
js
Copy code
4

*/