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

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num) {
    return num * 5;
}
timesFive(5)

/*
С помощью letили constобъявите глобальную переменную с именем myGlobalвне какой-либо функции. 
Инициализируйте его со значением 10.
Внутри функции fun1назначьте 5без oopsGlobal использования ключевых слов varили .letconst
*/

function fun1() {


}
let oopsGlobal = 5;

const myGlobal = 10;


function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

/* 
Добавьте локальную переменную в myOutfitфункцию, чтобы переопределить 
значение outerWearстрокой sweater.
*/

const outerWear = "T-Shirt";
function myOutfit() {
const outerWear = "sweater";
return outerWear;
}
myOutfit();

// Измените welcomeToBooleansфункцию, чтобы она возвращала trueвместо false.

function welcomeToBooleans() {
    return true; 
}
welcomeToBooleans()


/*
Создайте ifоператор внутри функции для возврата, Yes, that was trueесли параметр 
wasThatTrueесть true, и возврата No, that was falseв противном случае.
*/

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
if (wasThatTrue) {
    return "Yes, that was true";
}
return "No, that was false";
}
trueOrFalse(true)

/* 
Добавьте в указанную строку оператор равенства, чтобы функция возвращала строку, 
Equalкогда valона эквивалентна 12.
*/

function testEqual(val) {
    if (val == 12) {
return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

/*
Используйте оператор строгого равенства в ifоператоре, чтобы функция возвращала 
строку Equal, когда valона строго равна 7.
*/

function testStrict(val) {
    if (val === 7) { // Change this line
return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

/*
Функция compareEqualityв редакторе сравнивает два значения с помощью оператора равенства.
Измените функцию, чтобы она возвращала строку Equalтолько тогда, когда значения строго равны.
  */

function compareEquality(a, b) {
    if (a === b) { // Change this line
    return "Equal";
}
return "Not Equal";
}

compareEquality(10, "10");



