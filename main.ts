function identityFunction<T>(value: T): T {
    return value;
}

let resultNumber: number = identityFunction(1);
let resultString: string = identityFunction("Hello, oresama");

console.log(resultNumber); 
console.log(resultString);  
