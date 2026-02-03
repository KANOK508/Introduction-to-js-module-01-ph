
const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let minValueFind =  heights3[0];
for (heigh of heights3){
    if (minValueFind>heigh){
        minValueFind= heigh;
    }
}
console.log (minValueFind);