
const mysym = Symbol("k1")

const hrx = {
    name: "hitesh",
    "full name": "hitesh fulwariya",
    age: 21,
    email: "asdfg@gmail.com",
    [mysym]: "k2",
    address: { 
        lines :{
            line1:"sdf",
            line2:"sdf"
        }

    }
}

// console.log(hrx.name)
// console.log(hrx["name"])
// console.log(hrx["full name"]) // only way
// console.log(hrx[mysym])

// for change
hrx.name = "HTX"

// for locking
// Object.freeze(hrx)

// hrx.name = "HqwedTX"

// console.log(hrx)

// use fun normaly

hrx.fun1 = function(){
    console.log("sdf");
    console.log(`helooo, ${this.name}`);
}
// console.log(hrx.fun1())
// console.log(hrx.address.lines.line1)
const obj = {1:"wed",
    2:"fed"
}
const obj2 = {3:"ed",
    4:"fd"
}

const obj3 = Object.assign({}, obj2, obj)
// console.log(obj3)
// console.log(Object.keys(hrx))

// console.log(Object.values(hrx))

const {name: n} = hrx // destructing
console.log(n)

// json API call result
// {
//     "name": "hitesh"
//     "age" : 21

// }
