/*EJERCISIO 2 */
/* si el numero que caiga en el dado es 1, se gana 5 puntos
    si el numero que caiga en el dado es 3, se ganan 10 puntos
    si el numero que caiga en el dado es 5, se ganan 15 puntos
    cualquier otro numero no genera puntos */

const sideDado = (Dado) => {
    let owner;
    switch (Dado) {
        case "1":
            owner = "ganaste 5 puntos";
            break;
        case "3":
            owner = "ganaste 10 puntos";
            break;
        case "5":
            owner = "ganaste 15 puntos";
            break;
        default:
            owner = "Lo siento, vuelve a intentarlo";
            break;                
    }
return owner;
};

let Dado = sideDado("1");

console.log(Dado);