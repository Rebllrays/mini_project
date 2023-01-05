// function callback (x) {
//     console.log('Callback func start!');
//     console.log(x);
//     console.log('Callback end');
// };

// function mainFunc(x) {
//     console.log("Main func start");
//     callback(x);
//     console.log('Main func end!');
// }
// mainFunc("Hello");


// forEach(); - перебирает массив, но не возвращает в результате работы новый массив
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index, array) => {
//     if(item>3){
//         console.log(item);
//         // console.log(index);
//         // console.log(array);
//     }
//     // console.log(item);
//     // console.log(index);
//     // console.log(array);
// } )

// let arr = ['Tom', 'Jessica', 'Monica',"Hosse",'Enrique'];

// let newArr = [];
// arr.forEach(item => {
//     if(item.length>5) {
//         newArr.push(item);
//     };
// });
// console.log(newArr);


// map  - в результате работы возвращает новый массив
// let arr = [2,4,8,34,9,0,5];
// let newArr = arr.map(item => {
//     // console.log(item);
//     if(item %2 === 0) {
//         return item+10;
//     }
//     return item;
// })
// console.log(newArr);
// console.log(arr);

// let arr = ['Tom', 'Jessica', 'Monica',"Hosse",'Enrique'];
// // var1
// let newArr = [];
// for(let i=0; i<arr.length; i++) {
//     newArr.push(arr[i].length);
// };
// console.log(newArr);

// //var2 -arrow function
// let newArrr = arr.map(item => item.length);
// console.log(newArrr);

// // var3 - function expression
// let newarr = arr.map(function(item) {
//     return item.length;
// } );
// console.log(newarr);

// //var4 - function declaration 
// function strToLength (item) {
//     return item.length;
// };
// let neWArr = arr.map(strToLength);
// console.log(neWArr);

// filter();  - возвращает массив жлементов которые удовлетворяют условиям колл-бэк функции (колл-бэк функция должна возвращать true/false)
// let arr = [1, 70, 4, 89, 4, 5, 2];
// let newArr = arr.filter((item, index, array) => {
//     console.log(item);
//     return item % 2 ==0;
// });
// console.log(newArr);


// reduce();  - работае с массивом, в результате работы возвращает одно значение
// reduce(() => {}, initialValue) 
// let arr = [ 3, 7, true, 9, 67, 3, 5];
// let res = arr.reduce((previousItem, item, index, array) => {
//     // console.log(previousItem);
//     return previousItem + item;
// }, 100);
// console.log(res);


// includes();  - метод для поиска элемента в массиве(вернет true/ false)
// let arr = ['Jack', 'Helen', 'Monica', 'Bob', 'Tom'];
// let res = arr.includes('Monica', 2);
// console.log(res); //true


// every(); - проверяет, чтобы каждый элемент подходил под условие, если все удовлетворяют условию вернет true, в противном случае false 
// let arr = ['Jack', 'Helen', 'Monica', 'Bob', 1,'Tom'];
// let res = arr.every((item, index, array) => {
//     return typeof item === "string";
// });
// console.log(res);

// // some(); - противоположен every()
// let arr2 = [1, 127, 777, "dream"];
// let res2 = arr2.some((item, index, array) => {
//     return typeof item ==="string";
// })
// console.log(res);

// find(); - ищет и воозвращает элемент (если найдет) по заданному условию
// let arr = [
//     { title:'Samsung', price: 1000 },
//     { title:'Xiaomi', price: 500 },
//     { title:'Apple', price: 1500 }
// ];

// let res = arr.find(item => item.title === "Xiaomi");
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6];
// function findNum(arrr)  {
//     arrr= arrr.find(item => item ===5);
//     return arrr;
// };
// console.log(findNum(arr));

