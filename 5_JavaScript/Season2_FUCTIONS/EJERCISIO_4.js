/*EJERCISIO 4 */
/* Necesitamos organizar jugadores con base en el color de su uniforme,
    si el uniforme es gris, pertenecen al equipo 1
    si el uniforme es negro, pertenecen al equipo 2
    si el uniforme es azul, pertenecen al equipo 3
    cualquier otro color no tiene equipo (no juega) */

/* MI RESOLUCION ES: 

    -Desglosar los jugadores por el color de su uniforme:
        - Caso 1: SI son de color gris, seran del equipo 1
        - Caso 2: SI son de color negro, seran del equipo 2
        - Caso 3: SI son de color azul, seran del equipo 3
        - Por defecto: SI son de otro color no especificado, no tiene equipo, osea no jugaran */

const regimentalsColor = (color) => {
   let squad;
    switch (color) {
        case "gray":
            squad = "Perteneces al equipo No. 1";
            break;
        case "black":
            squad = "Perteneces al equipo No. 2";
            break;
        case "blue":
            squad = "Perteneces al equipo No. 3";
            break;
        default:
            squad = "Lo siento, tu color de uniforme no pertenece a ningun equipo asignado; no puedes jugar";
            break;                
        }
return squad;
};

let color = regimentalsColor("red");
        
console.log(color);