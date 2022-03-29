//1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

const array_1 = [1, 4, 7, 12, 8, 3];

console.log(`Initial array: ${array_1} `);
const newArray = reverseArray(array_1);
console.log(`Reversed array: ${newArray} `);

function reverseArray(array: number[]) {
  return array.reverse();
}

//2) найти максимальное значение числа в массиве ([3,67,15...])

const array_2 = [56, 1, 4, 69, 7, 12, 8, 3, 37];

const maxValue = maxArrayValue(array_2);
console.log(`Max array value: ${maxValue} `);

function maxArrayValue(array: number[]) {
  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue;
}

//3) записать в массив ряд фибаначи начиная с N члена с длинной массива M

const number = 5;
const length_3 = 7;
const array_3: number[] = [];
createArray(array_3, number, length_3);
console.log(array_3);

function fib(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function createArray(array: number[], number: number, length: number) {
  let nextNumberValue = fib(number);
  for (let i = 0; i < length; i++) {
    array.push(nextNumberValue);
    nextNumberValue = fib(number + 1);
    number++;
  }
}

//4) даны 2 4-хзначных числа с неповторяющимися цифрами,
//надо определить сколько цифр в этих числах совпадают по значению и позиции
//и сколько только по значению (3487 и 3794 ---> 1 и 2 )

const number_1 = 3487;
const number_2 = 3790;

const valueMatchesAmount = checkValue(number_1, number_2);
console.log(`Amount of matches by value: ${valueMatchesAmount} `);

const valueAndPositionMatchesAmount = checkValueAndPosition(number_1, number_2);
console.log(
  `Amount of matches by value and position: ${valueAndPositionMatchesAmount} `
);

function checkValue(number_1: number, number_2: number) {
  const array_1 = String(number_1).split("");
  const array_2 = String(number_2).split("");
  let amount = 0;
  for (let i = 0; i < array_1.length; i++) {
    for (let j = 0; j < array_2.length; j++) {
      if (array_1[i] === array_2[j]) {
        amount++;
      }
    }
  }
  return amount;
}

function checkValueAndPosition(number_1: number, number_2: number) {
  const array_1 = String(number_1).split("");
  const array_2 = String(number_2).split("");
  let amount = 0;
  for (let i = 0; i < array_1.length; i++) {
    if (array_1[i] === array_2[i]) {
      amount++;
    }
  }
  return amount;
}

//5) сортировка массива по возрастанию/убыванию

const array_5 = [1, 4, 7, 12, 8, 3];

console.log(`Initial array: ${array_5} `);
const ascSortedArray = ascSort(array_5);
console.log(`Array sorted in ascending order: ${ascSortedArray} `);
const descSortedArray = descSort(array_5);
console.log(`Array sorted in descending order: ${descSortedArray} `);

//по возрастанию
function ascSort(array: number[]) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

//по убыванию
function descSort(array: number[]) {
  return array.sort(function (a, b) {
    return b - a;
  });
}

//по возрастанию - переопределенная
function ascSortOverridden(array: number[]) {
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
}

//по убыванию - переопределенная
function descSortOverridden(array: number[]) {
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] < array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
}

//6) удалить из массива все повторяющиеся элементы

//let array = [1, 4, 5, 12, 12, 4, 7, 1, 12, 13, 7, 12, 8, 3, 12, 4, 4, 7, 4];
const array_6 = ["maria", "alex", "eugeni", "maria", "maria", "alex"];

console.log(`Initial array: ${array_6} `);
removeRepetitions(array_6);
console.log(`New array: ${array_6} `);

function removeRepetitions(array: number[] | string[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
}
