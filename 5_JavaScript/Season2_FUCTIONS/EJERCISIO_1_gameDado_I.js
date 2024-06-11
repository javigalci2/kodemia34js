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