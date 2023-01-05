// Поверхностное и глубокое копирование объектов

// let user = {
//     name: 'Tom',
//     age:40,
//     pet: {
//         type: 'Cat',
//         color: 'White',
//     }
// };

// Пример того так нужно не делать 
// let user2 = user;
// user2.name ='Jack';
// console.log(user, user2); //{name: 'Jack', age: 40} {name: 'Jack', age: 40}

//поверхностное копирование
// Object.assign(); 
// let user2 = Object.assign({}, user);
// user2.age = 90;
// user2.pet.color = 'Black'; // didn't work
// console.log(user, user2);  //{name: 'Tom', age: 40} {name: 'Tom', age: 90}

//глубокое копирование
// let user2 = JSON.parse(JSON.stringify(user)); - parse - object/ stringify - string
// user2.pet.color = 'Black';
// console.log(user);
// console.log(user2);

// Деструктуризация
let list = [
    'Milk',
    'Sugar',
    'Salt',
    'Olive Oil',
    'Pepper',
];

// let first = list[0];
// let second = list[1];
// console.log(first, second);

// let [first, second, ...other] = list; //...other -- rest operator
// console.log(first, second, other);  //Milk Sugar (3array) ['Salt', 'Olive Oil', 'Pepper']

// let arr = [
//     [0, 1, 2, [3]],
//     [4, 5, 6, 7]
// ];

// let [[a, b, c, [d]], newArr] = arr;
// console.log(a, b, c, d, newArr);  //0 1 2 3 (4array) [4, 5, 6, 7]

// let arr = [1, 2, 3, 4, 5];
// let [,,, four] =arr;
// console.log(four);

// let person = {
//     name : 'Juan',
//     age: 20,
//     lastName: 'Starham',
// };

// // let name = person.name;
// let {name, lastName, age} = person;
// console.log(name, lastName, age);  //Juan Starham 20

// let obj = {
//     subObj: {
//         name:'Hosse'
//     }
// };

// let {subObj: {name}} = obj;
// console.log(name);  // Hosse

// let obj = {
//     arr: [
//         {
//             name: 'Tom'
//         }
//     ]
// };

// let {arr: [{name}]} = obj;
// console.log(name);   //Tom
 
// let obj = {
//     name: 'T',
//     color: 'black'
// }

// let obj2 = {
//     lastName: 'N',
//     surname: 'm',
//     color:'white'
// }

// let {color} = obj;
// let newObj = {...obj2, color};
// console.log(newObj);

let obj ={
    name: 'John',
    age: 25,
    positions: [
        'Python Developer',
        'JS Developer',
        'Devops'
    ],
    cat: {
        name: "Miguel",
        age:3,
    }
};

// function getInfo({name, position: [...skills], cat: {name: catName}}) {
//     console.log(`Hello, I'm ${name}, I'm work at ${skills}. I have a cat, his name is ${catName}`);
// };
// getInfo(obj);

// let {
//     name,
//     age,
//     positions: [
//         first_skill,
//         second_skill,
//         ...other
//     ],
//     cat: {
//         name:catName,
//         age: catAge
//     }
// } = obj;
// console.log(name, age, first_skill, second_skill, other, catName, catAge);

let product = {
    title: 'Samsung',
    price: 1500,
};

let {title= 'DefaultValue'} = product;
console.log(title);