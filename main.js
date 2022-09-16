/*DECLARADA*/

// function sumar(a,b){
//     let suma=a+b;
//     document.write(suma);
// }
// sumar(1,2)
/*EXPRESADA*/

// const sumar=function(a,b){
//     let suma=a+b;
//     document.write(suma);
// }
// sumar(1,2)
/*ARROW FUNCTION*/
// const sumar=(a,b)=>{
//     let suma=a+b;
//     document.write(suma);
// }
// sumar(1,2)


let number=+prompt("Give me a number");
for (let i = 1; i <= 9; i++) {
    document.write(`${number}x${i}=${number*i}<br>`); 
    
}
