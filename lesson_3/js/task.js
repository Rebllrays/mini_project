// 14. Дан массив: [
//     {title: 'Toyota', year: 2006, engVol: '2cm3'},
//     {title: 'Mercedes E-class', year: 1996, engVol: '2.4cm3'},
//     {title: 'Toyota Avensis', year: 2003, engVol: '1.7cm3'},
//     {title: 'Lexus LX570', year: 2020, engVol: '5.7cm3'},
//     {title: 'Mercedes S-class', year: 2010, engVol: '4cm3'}
// ], задача: вернуть массив следующего вида [[autoTitle, tax], [autoTitle, tax], [autoTitle, tax]], tax - налог на ввоз автомобиля в различные страны, расчитать по следующим условиям(авто до 2000 года выпуска: 50$ за кубический см, авто от 2000 до 2007 года выпуска: 40$, авто с 2007 до 2015 года выпуска: 30$, авто с 2015 года выпуска и выше: 20$)

// методы массивов
let carArr = [
        {title: 'Toyota', year: 2006, engVol: '2cm3'},
        {title: 'Mercedes E-class', year: 1996, engVol: '2.4cm3'},
        {title: 'Toyota Avensis', year: 2003, engVol: '1.7cm3'},
        {title: 'Lexus LX570', year: 2020, engVol: '5.7cm3'},
        {title: 'Mercedes S-class', year: 2010, engVol: '4cm3'}
];
let newArr = carArr.map(item => {
    let num = parseFloat(item.engVol);
    let tax =0;
    if(item.year < 2000) {
        tax = num * 50
     } else if (item.year >= 2000 && item.year < 2007){
         tax = num * 40
     } else if (item.year >=2007 && item.year < 2015) {
         tax = num * 30
     } else if (item.year >=2015) {
         tax = num * 20
     }
     return [item.title, tax];

});
console.log(newArr);


// 15. Дан массив следущего вида: [
//     {title: 'Post 1', author: 'User 1', likes: 549},
//     {title: 'Post 2', author: 'User 1', likes: 67},
//     {title: 'Post 3', author: 'User 3', likes: 345},
//     {title: 'Post 4', author: 'User 6', likes: 1023},
//     {title: 'Post 5', author: 'User 2', likes: 150},
// ], задача: вернуть массив, в котором будут только названия 3х самых популярных постов(ориентироваться на лайки)

let arr = [
        {title: 'Post 1', author: 'User 1', likes: 549},
        {title: 'Post 2', author: 'User 1', likes: 67},
        {title: 'Post 3', author: 'User 3', likes: 345},
        {title: 'Post 4', author: 'User 6', likes: 1023},
        {title: 'Post 5', author: 'User 2', likes: 150},
    ];

// let newArray = arr.filter(item => {
//     if(item.likes > 300) {
//         return [item.title, item.likes];
//     }
// });
// console.log(newArray);

let newArray = posts.sort((a, b) => b.likes - a.likes).slice(0, 3);

newArray = newArray.map(item => item.title);

console.log(newArray);
