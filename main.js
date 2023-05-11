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

/*
Добавьте оператор неравенства !=в ifоператор, чтобы функция возвращала 
строку Not Equal, когда valона не эквивалентна 99.
*/

function testNotEqual(val) {
    if (val != 99) { // Change this line
    return "Not Equal";
}
return "Equal";
}

testNotEqual(10);


function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
}
return "Equal";
}

testStrictNotEqual(10);

// Добавьте оператор «больше чем» к указанным строкам, чтобы операторы return имели смысл.

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
    return "Over 100";
}

  if (val > 10) {  // Change this line
    return "Over 10";
}

return "10 or Under";
}
testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
}

  if (val >= 10) {  // Change this line
    return "10 or Over";
}

return "Less than 10";
}

testGreaterOrEqual(10);


function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

/*
Замените два оператора if одним оператором, используя &&оператор, 
который вернет строку, Yesесли valменьше или равно 50и больше или равно 25. 
В противном случае будет возвращена строка No.
*/

function testLogicalAnd(val) {

if (val <= 50 && val >= 25) {
    return "Yes";
}
return "No";
}

testLogicalAnd(10);

/*
Объедините два ifоператора в один оператор, который возвращает строку, Outsideесли 
valона не находится между 10и 20включительно. В противном случае вернуть строку Inside.
*/

function testLogicalOr(val) {

if (val < 10 || val > 20) {
    return "Outside";
}

    return "Inside";
}

testLogicalOr(15);

// Объедините ifутверждения в одно if/elseутверждение.

function testElse(val) {
let result = "";
// Only change code below this line
if (val > 5) {
result = "Bigger than 5";
} else {
result = "5 or Smaller";
}
// Only change code above this line
return result;
}

testElse(4);

// Преобразуйте логику, чтобы использовать else ifоператоры.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {

    return "Between 5 and 10";
}
}
testElseIf(7);

//Измените порядок логики в функции, чтобы она возвращала правильные операторы во всех случаях.

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

/*
Напишите цепочку операторов if/ else if, чтобы выполнить следующие условия:

num < 5- вернуться Tiny
num < 10- вернуться Small
num < 15- вернуться Medium
num < 20- вернуться Large
num >= 20- вернутьсяHuge
*/

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    } else {
    
        return "Change Me";
    }
    }
    
    testSize(7);