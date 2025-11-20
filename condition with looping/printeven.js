// 1.Print evens from start to end 
// const start = 1;
// const end = 10;
// for (let n = start; n <= end; n++) {
//   if (n % 2 === 0) {
//     console.log(n);
//   }
// }
// 2.Count vowels (a,e,i,o,u) in the string
// let str = "hello world";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   if (
//     ch === "a" ||
//     ch === "e" ||
//     ch === "i" ||
//     ch === "o" ||
//     ch === "u"
//   ) {
//     count++;
//   }
// }
// console.log("Vowels:", count);
//3.sum of numbers
var num = 115;
var sum = 0;
while (num > 0) {
    var digit = num % 10;
    sum = sum + digit;
    num = (num - (num % 10)) / 10;
    //   temp = (temp - (temp % 10)) / 10;
}
console.log("Sum:", sum);
//4.print prime numbers
// let a=1;
// let b=50;
// for(let n=a; n<=b; n++){
//   let isprime=true;
//   if(n<=1){
//     isprime=false;
//   }
//   else{
//     for(let i=2; i<n; i++){
//       if(n%i===0){
//         isprime=false;
//         break;
//       }
//     }
//   }
//   if(isprime){
//     console.log(n);
//   }
// }
//5.fibonacci series
// let n = 10;
// let a1 = 0;
// let a2 = 1;
// console.log(a1);
// console.log(a2);
// for (let i = 3; i <= n; i++) {
//   let next = a1 + a2;
//   console.log(next);
//   a1 = a2;
//   a2 = next;
// }
//6.find min and max
// let arr = [5, 2, 9, -3, 7];
// let min = arr[0];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("Min:", min);
// console.log("Max:", max);
//7.reverse number
// let number = 12345;
// let rev = 0;
// while (number > 0) {
//   let digit = number % 10;
//   rev = rev * 10 + digit;
//   number = (number - digit) / 10;
// }
// console.log("Reverse:", rev);
//8.palindrome number
// let x = 121;
// let temp = x;
// let rev2 = 0;
// while (temp > 0) {
//   let digit = temp % 10;
//   rev2 = rev2 * 10 + digit;
//   temp = (temp - (temp % 10)) / 10;
// }
// if (x === rev2) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }
