let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

/*const A = varA;
varA = varB; //B
varB = varC; //C
varC = A; //*/



[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);