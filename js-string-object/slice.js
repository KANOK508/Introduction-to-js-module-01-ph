/* join  and  split -------work Oppositely...


And, 
split : if we have an string ---we can convert it into an OBJECT using the split --- (depend on space, comma , anything others... )
join : if we have an array --join Defalut join them and make a string 
*/

const address = 'andorKilla';
const part = address.slice(2, 5);  //  (firstIndex, lastIndex+1)    
// when slice ---->// exclude last index.........
console.log(part);

const sentence = 'I am a good and hardworking person.';
const sentenceNow = sentence.split(' ')
console.log(`after split a sting now the tyee is : `, typeof sentenceNow , `-------------------------------------`)

console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friends = friendsStr.split(',');
console.log(friends);
console.log(`--------------------------------------------------`)
const realFriend = [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];
console.log(realFriend) // that print the array
const realFriendNow = realFriend.join();
console.log(`after join realFriend is now: `, typeof(realFriendNow))
console.log(`-----------------------------------------------------`)
console.log(realFriend.join());     //  that is default --join with comma(,)
console.log(realFriend.join(','))
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));