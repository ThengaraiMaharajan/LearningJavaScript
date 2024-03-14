// 1)
// var starVar = '#';
// for(let i=0; i<7;i++){
//     let row = '';
//     for(let j = 1; j<=i;j++){
//         row += '#';
//     }
//     console.log(row);
// }

// 2) 
// for(let i=0; i<=100; i++){
//     if(i % 5 == 0 && i%3==0){
//         console.log('FizzBuzz');
//     }else if(i % 5 == 0){
//         console.log('Buzz');
//     }else if(i % 3 == 0){
//         console.log('Fizz')
//     }else{
//         console.log(i)
//     }
// }
// 

// 3)
// let chessboard = '';
// let size = 8;
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if ((i + j) % 2 === 0) {
//             chessboard += ' ';
//         } else {
//             chessboard += '#';
//         }
//     }
//     chessboard += '\n';
// }
// console.log(chessboard);




// 4) Minimum
// function min(a,b){
//     if(a<b){
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log('Min value of two numbers',min(2,10));

// 5) recursion (not done yet)
// function isEven(n){
//     if((n%2)==0){
//         console.log(n,' is even');
//         return true;
//     }else{
//         console.log(n,' is odd');
//         return false;
//     }
// }
// console.log(isEven(50));

// 6) Bean Counting
function countBs(str){
    let Bcount = 0;
    let workCount = str.length+1;
    let index = 0;
    while(str.length > workCount){
        index++;
        console.log(str[index]);
    }
}
countBs('Thengarai Maharajan');