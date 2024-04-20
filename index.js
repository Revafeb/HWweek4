let arrayRandom = [];
let evenArray = [];
let OddArray = [];
let totalEven = 0;
let totalOdd = 0;

// 100 Nilai Random antara 1 sampai 50
for (let i = 0; i < 100; i++) {
    const random = Math.floor(Math.random() * 50) + 1;
    arrayRandom.push(random)
}

// Memisahkan Nilai pada Array berdasarkan Index Ganjil dan Genap dan menghitung Total
for (let i = 0; i < arrayRandom.length; i++) {
    if (i % 2 === 0) {
        evenArray.push(arrayRandom[i]);
        totalEven += arrayRandom[i];
    } else {
        OddArray.push(arrayRandom[i]);
        totalOdd += arrayRandom[i];
    }
}

function checkIf(min, max, array) {
    let tmpMin = array[0]
    let tmpMax = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            tmpMin = array[i]
        }
        if (array[i] > max) {
            tmpMax = array[i]
        }
    }
    return { tmpMin, tmpMax }
}

// Menghitung min, max, dan rata-rata array genap
let minEven = evenArray[0]
let maxEven = evenArray[0]
const { tmpMin, tmpMax } = checkIf(minEven, maxEven, evenArray)
minEven = tmpMin
maxEven = tmpMax

let avarageEven = totalEven / evenArray.length;

//Menghitung min, max, dan rata-rata array ganjil
let minOdd = OddArray[0]
let maxOdd = OddArray[0]
const maxObject = checkIf(minOdd, maxOdd, OddArray)
minOdd = maxObject.tmpMin
maxOdd = maxObject.tmpMax

let avarageOdd = totalOdd / OddArray.length;


console.log("ini Array Genap " + evenArray.length)
console.log("ini Array Ganjil " + OddArray.length)
console.log("Min Genap " + minEven);
console.log("Max Genap " + maxEven);
console.log("Total Genap " + totalEven);
console.log("Rata-Rata Genap " + avarageEven);
console.log("Min Ganjil " + minOdd);
console.log("Max Ganjil " + maxOdd);
console.log("Total Ganjil " + totalOdd);
console.log("Rata-Rata Ganjil " + avarageOdd);
console.log(evenArray);
console.log(OddArray);
