/*EJERCISIO 5 */
/* Tenemos un juego en el que se usan dos dados, y las reglas son las siguientes:
    - El juego se gana si se obtiene alguno de los siguientes puntajes:
                           7, 11, 3
    - Se obtiene una tirada extra con las siguientes condiciones:
        -- Obteniendo dos numeros iguales
        -- Obteniendo un numero divisible entre 3, pero que no sea 3 */

/* MI RESOLUCION ES: 
    - Cuantos dados son: 2
    - Cual es el rango de numeros por cada uno de los lados de un dado: del 1 al 6
    - Como obtengo los numeros ganadores usando los 2 dados: sumando los numeros caidos en cada dado */

const countDados = (dado1, dado2) => {
    let result = dado1 + dado2;
        dado1 = 1,2,3,4,5,6;
        dado2 = 1,2,3,4,5,6;
    if (result == 7, 11, 3){
        return "Ganaste el juego";
    } else (result == 2, 4, 6, 8, 10, 12 || result == 9)
        return "Obtienes una tirada extra";
};

let result = countDados(6, 6);
console.log(result);



/* codigo basura (bueno todo mi codigo es un asco jeje) */
/* const countDados = (dados) => {
    let dados = dado1 + dado2;
        dado1 = 1,2,3,4,5,6;
        dado2 = 1,2,3,4,5,6;
    if (dados == 7, 11, 3){
        return "Ganaste el juego";
    } else (dados %2 == 0 || dados == 9){
        return "Obtienes una tirada extra";
    }
return dados;
}; */