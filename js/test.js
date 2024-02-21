 

let str = '2*5-3';

console.log(eval(str))

let result = new Function(`return ${str}`)();
console.log(result);