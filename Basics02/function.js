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