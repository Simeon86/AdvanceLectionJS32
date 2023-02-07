window.addEventListener('DOMContentLoaded', () => {
	
});	

function factorial(n) {
    let sum = 1;
    for(let i = 1; i <= n; i++) {
        sum *= i;
    }
    return sum
}
console.log(factorial(3))
console.log(factorial(4))

// Rekursia

console.log('////////////////Factorial////////////////////////////////////')

function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(10))

////////////////////////////////////////////////////

function factorial(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(-1))

console.log('////////////////Double Factorial////////////////////////////////////')

function doubleFactoriel(n) {
    if(n < 2){
        return 1;
    } else {
        return doubleFactoriel(n - 2);
    }
}
console.log(doubleFactoriel(5))



const company = {
    sales: [
        {name: 'Aleks', salary: 10},
        {name: 'Pesho', salary: 15},
    ],
    development: {
        frontEnd: [
            {name: 'Ivancho', salary: 100},
            {name: 'Mariika', salary: 150},
        ],
        backEnd: [
            {name: 'Garabet', salary: 1000},
            {name: 'Chepai', salary: 1500},
        ]
    },
    security: {
        headOfSecurity: [
            {name: 'Kirkor', salary: 100},
        ],
        managerSecurity: {
            nightShift: [
                {name: 'Minka', salary: 200},
                {name: 'Marincho', salary: 200},
            ],
            dayShift: [
                {name: 'Kali', salary: 200},
                {name: 'Tisho', salary: 200},
            ]
        }
    }
}


function sumSalaries(department) {
    if(Array.isArray(department)) {
        return department.reduce((prev, curr) => prev + curr.salary, 0)
    } else {
        let sum = 0;
        for(let subDepartment of Object.values(department)){
            sum += sumSalaries(subDepartment);
        }
        return sum
    }
}

console.log(sumSalaries(company))
console.log(Object.values(company))
console.log(company)


Object.values
Object.keys
Object.entries


console.log('////////////////Reduce////////////////////////////////////')

console.log([1,2,3].reduce((prev, curr, index, array) => prev + curr))

console.log([1,2,3].reduce((prev, curr, index, array) => prev + curr, 100))
 
// prev - предишна стойност
// curr - сегащна стойност


// .reduce((prev, curr) => prev + curr.salary, 0)


let newArr = [];
let arr = [1,2,3]

for(let value of arr){
    newArr.push(value * 2)
    console.log(value * 2);
}
console.log(newArr)

arr.forEach(curr => {
    console.log(curr * 2);
})

let nArr = arr.map(curr => {
    return curr * 2;
})
console.log(nArr)

let sum = 0;
for(let value of arr) {
    sum += value;
}
console.log(sum)

console.log('////////////////Magic Cube////////////////////////////////////')

function magicCube(n) {
    if(n < 2) {
        return 1;
    } else {
        return n * n + magicCube(n -1);
    }
}
console.log(magicCube(5))
console.log(magicCube(3))

console.log('////////////////////////////////////////////////////')

let numArr = [5, 12, 21, 312, 5, 512, -5, 12, 512, 21224574, 1, 0, 412]

function heighestNumber(arr) {
    if(arr.lenght === 1)
        return arr[0];
         
    if(arr[0] > arr[1])
        arr[1] = arr[0];

    console.log(arr);
    arr.splice(0,1);

        return heighestNumber(arr)
    }

console.log(heighestNumber(numArr))