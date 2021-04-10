//Числа фибоначи

function fibonachi(n)
{
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    else { 
        return fibonachi(n - 1) + fibonachi(n - 2);
    }
}
console.log(fibonachi(8));
console.log(fibonachi(15));
console.log(fibonachi(19));

//Полиндром

// function polindrom(str, n) {
//     if (n > str.length / 2) {
//         return 'Yes'
//     }

//     const firstSym = str[n]
//     const lastSym = str[str.length -1 -n]
//     if (firstSym === lastSym) {
//         return polindrom(str, n + 1)
//     }
//     return 'No'

// }
// console.log(polindrom('radar',0));
// console.log(polindrom('radarka',0));
// console.log(polindrom('radarka',0));
// console.log(polindrom('radarka',0));


// function isPalindrome  (str) {
//     if (str.length < 2) {
//         return "Yes";
//     }

//     if(str[0] === str.slice(-1)) {
//         return isPalindrome(str.slice(1,-1));
//     }

//     return "No";
// };
// console.log(isPalindrome('radarka',));
// console.log(isPalindrome('radar',));
// console.log(isPalindrome('madam',));
// console.log(isPalindrome('mada',));
// console.log(isPalindrome('kazak',));
// console.log(isPalindrome('madam'));
// console.log(isPalindrome('ada'));
// console.log(isPalindrome('mada'));

// function checkPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1))
//     return false;
// }