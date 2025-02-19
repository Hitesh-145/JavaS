const arr = [1,2,3,4,5,6,7,8,9,0]

// forof loop
for (const num of arr) {
    // console.log(num)
}

// forin
for (const key in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        // console.log(element)
        
    }
}

// maps
const mp = new Map()
mp.set('a', 'apple')
mp.set('b', 'boy')

// console.log(mp)
for (const [key, value] of mp) {
    // console.log(key, '-', value)
    
}

// use forin loop for object itr
const ob = {
    a: 'apple',
    b: 'boy',
    c: 'cat'
}
for (const key in ob) {
//    console.log(`${key} for ${ob[key]}`)
    }

// foreach loop
arr.forEach(function (num) {
    // console.log(num)
});

arr.forEach(num => {
    // console.log(num)
});

const myarr = [
    {
        lang: 'hindi',
        lang2: 'marwadi'
    },
    {
        lang: 'punjabi',
        lang2: 'english'
    },
    {
        lang: 'hindi1',
        lang2: 'marwadi1'
    }
]

myarr.forEach((item) => {
    // console.log(item.lang)
});

// for return use filter
const newNum = arr.filter((num) => num>4)
// console.log(newNum)

const newNum1 = arr.filter((num) => {
  return  num<4  // need to write return keyword
}
)
// console.log(newNum1)

// chaining 
const neew = arr
            .map((nums) => nums*10)
            .map((nums) => nums-10)
            .filter((nums) => nums>40)

// console.log(neew)

// reduce 
const nw = arr.reduce((acc, curr) => acc+curr ,1)

console.log(nw)