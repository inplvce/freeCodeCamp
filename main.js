// Определите переменную a с помощью const и инициализируйте ее значением 9.

const a = 9;
console.log(a);

const myStr = "FirstLine" + "\n\t\\SecondLine" + "\nThirdLine";
console.log(myStr);

// Создайте вложенный массив с именем myArray.

const myArray = [["Joy", 19], [18, "Jean"]];

// Create a variable called myData and set it to equal the first value of myAarray using bracket notation.

const myAarray = [50, 60, 70];

let myData = myAarray[0];

// Измените данные, хранящиеся в индексе 0, myArrayна значение 45.

const mYArray = [18, 64, 99];

mYArray[0] = 45;

// Измените данные, хранящиеся в индексе 2, Aray на значение 5.
const array = [18, 64, 99];

array[2] = 5;

// Нажмите ["dog", 3]на конец переменной array.

array.push([12, "Joseph"]);

/*
Используйте .pop()функцию, чтобы удалить последний элемент yArrayи 
присвоить выскочившее значение новой переменной, removedFromMyArray.
*/

const yArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

console.log(removedFromMyArray);

/*
Используйте .shift()функцию, чтобы удалить первый элемент из myArrayи присвоить 
«сдвинутое значение» новой переменной, reemovedFromMyyArray.
*/
const myyArray = [["John", 23], ["dog", 3]];
const reemovedFromMyArray = myArray.shift()

//Добавьте ["Paul", 35]в начало переменной, mArray используя unshift().
const mArray = [["John", 23], ["dog", 3]];
myArray.unshift(["Paul", 35]);