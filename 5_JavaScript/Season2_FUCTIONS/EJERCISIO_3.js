/*EJERCISIO 3 */
/* Necesitamos poder evaluar cualquier frase, y determinar si es una frase corta o es una frase larga,
    teniendo en cuenta que una frase corta tiene menos de 20 letras
    y una frase larga tiene 20 letras o mas */

/* MI RESOLUCION ES: 

    -Se supone que una frase CORTA tiene una longitud de -20 letras
        - SI el rango de letras debe ser de 0 a <= 19 letras
    - Se supone que una frase LARGA tiene una longitud de 20 letras o mas
        - Entonces el rango de letras debe ser de Mayor a partir de 20 letras */

const countLetters = (length) => {
    if (length = 0 && length <= 19){
        return "Soy una frase corta";
    } else (length => 20)
        return "Soy una frase larga";
};

let length = countLetters("soy una frase corta");
console.log(length);