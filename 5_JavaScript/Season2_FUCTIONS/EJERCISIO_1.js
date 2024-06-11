/*EJERCISIO 1 */
/* si el numero del dado es par, y es menor o igual a 4, el jugador gana la partida
si el numero del dado es non, y es mayor que 2, el jugador pierde la partida */
const checkLostandOwner = (dado) => {
    if (dado %2 == 0 && dado <= 4) {
        return "el jugador GANA la partida";
    } else (dado %2 == 0 || dado >2) 
        return "el jugador PIERDE la pártida";
    
};

let checkDado = checkLostandOwner (6);
console.log(checkDado);

/*EJERCISIO 2 */
/* si el numero que caiga en el dado es 1, se gana 5 puntos
    si el numero que caiga en el dado es 3, se ganan 10 puntos
    si el numero que caiga en el dado es 5, se ganan 15 puntos
    cualquier otro numero no genera puntos */



