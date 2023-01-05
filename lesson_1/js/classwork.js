// Методы массивов. Классная работа.

// Задание №1
// Дан массив из чисел: let nums = [12, 10, 99, 9, 3, 2, 120, 200,];
// Используя метод filter(), выведите в массив числа, которые больше или равны 10.
// Вывод: [12, 10, 99, 120, 200]

let nums = [12, 10, 99, 9, 3, 2, 120, 200,];
let res = nums.filter(item => {
    if(item>=10) {
        return item;
    }
});
console.log(res);


// Задание №2
// Дан массив let lengthName = [`Patricia` , `William` , `Barbara` , `James` , `Chloe` , `Elizabeth` ]; Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().

let lengthName = [`Patricia` , `William` , `Barbara` , `James` , `Chloe` , `Elizabeth` ];
let resLength = lengthName.map(item => item.length);
console.log(resLength);

// Задание №3
// Дан массив let arrNums = [12, 21, 27, 31, 45, 50 ];
//  С помощью цикла foreach и оператора if выведите в console элементы массива, которые больше 20-ти, но меньше 30-ти.

let arrNums = [12, 21, 27, 31, 45, 50 ];
let newArr = [];
arrNums.forEach(item => {
    if(item>20 && item<30) {
        newArr.push(item);
    }
});
console.log(newArr);

// Задание №4
// Дан массив let total = [ 1, 5, 0, 3, 6 ];
// Суммируйте все значения в данном массиве и выведите результат в alert(). Используйте метод reduce().

let total = [ 1, 5, 0, 3, 6 ];
let result = total.reduce((previousItem, item)=> {
    return previousItem + item;
} );
console.log(result);
