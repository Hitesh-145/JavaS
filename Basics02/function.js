function me(num1, num2){
console.log(num1+num2)
}

me(1,2)
// when arguments are not fixed
function calprice(...num){
return num
}

console.log(calprice(12,123,1234))

const obj = {
    name:"fds",
    user:"asd"
}

function objFun(anyObj){
    console.log(`1 is ${anyObj.name} and 2 is ${anyObj.user}`);
}
objFun(obj)


one(9)  // allowed
function one(num){
    return num+1;
}

//two(4) ---not allowed befor declration
const two  =  function(num){
    return num+2;
}

two(3)

// arrow fun

const htx = (x,y) => {
  return x+y

}

const hrx = (x,y) => (x+y); // no need of return it's implisite

// !!! imediataly invoked fun expression (IIFE)

(
    function three(){
        console.log("sdfg")
    }
)(); // needed if more then two iife 

(
(name) => { console.log(`${name}, is there`)}
)("hitesh")