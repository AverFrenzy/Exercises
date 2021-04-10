// // Упр. 1
// // пример 1
// let nums = [4, 2 , 7, 11, 15]
// for (let i = 0; i < nums.length; i++) {
//    for (let j = 0 ; j < nums.length; j++) {
//        if (nums[i] + nums[j] === 9 ) {
//            if (i===j) {
//                continue;
//            }
//            console.log(i)
//        }
//    }
// }

// // пример 2
// let nums = [26, 3 , 2, 4, 7, 1]
// for (let i = 0; i < nums.length; i++) {
//    for (let j = 0 ; j < nums.length; j++) {
//        if (nums[i] + nums[j] === 6 ) {
//            if (i===j) {
//                continue;
//            }
//            console.log(i)
//        }
//    }
// }

// //пример 3 
// let nums = [3, 3 , 4, 5, 9]
// for (let i = 0; i < nums.length; i++) {
//    for (let j = 0 ; j < nums.length; j++) {
//        if (nums[i] + nums[j] === 6 ) {
//            if (i===j) {
//                continue;
//            }
//            console.log(i)
//        }
//    }
// }


//Упр. 2

//пример 1
let num = [1, 3, 4, 2, 2]
for (let i = 0; i < num.length; i++){
    for(let j = 0; j < num.length; j++){
        if (i === j )
            continue;
        if (num[i] === num[j]) {
                console.log(i)
        }
    }
}


//пример 2
// let num = [3, 1, 3, 4, 2, true]
// for (let i = 0; i < num.length; i++){
//     for(let j = 0; j < num.length; j++){
//         if (i === j )
//             continue;
//         if (num[i] === num[j]) {
//                 console.log(i)
//         }
//     }
// }


//пример 3
// let num = [9, 4, 77, 5, 1, 12, 'qwerty', 66, 4]
// for (let i = 0; i < num.length; i++){
//     for(let j = 0; j < num.length; j++){
//         if (i === j )
//             continue;
//         if (num[i] === num[j]) {
//                 console.log(i)
//         }
//     }
// }

//Упр. 3

//пример 1
// let num = [7, 13, 5, 1, 99]
// let sum = 0;
// for(let i = 0; i < num.length; i++) {
// sum += num[i];
// }
// console.log(sum);


//пример 2
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0;
// for(let i = 0; i < num.length; i++) {
// sum += num[i];
// }
// console.log(sum);


//пример 3
// let num = [11,45,2,5,4,4]
// let sum = 0;
// for(let i = 0; i < num.length; i++) {
// sum += num[i];
// }
// console.log(sum);