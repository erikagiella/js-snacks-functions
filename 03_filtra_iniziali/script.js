/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const iniziale = "A";

// Dichiara la funzione qui.

//Arrow function

const filtro_iniziali_arrow = (array_stringhe, lettera) =>{
    const iniziali = [];
    for (let i = 0; i < array_stringhe.length; i++){
        if (array_stringhe[i].charAt(0) === lettera){
            iniziali.push(array_stringhe[i]);
        }
    }
    return iniziali;
}


//Function
function filtro_iniziali (array_stringhe, lettera) {
    const iniziali = [];
    for (let i = 0; i < array_stringhe.length; i++){
        if (array_stringhe[i].charAt(0) === lettera){
            iniziali.push(array_stringhe[i]);
        }
    }
    return iniziali;
}


// Invoca la funzione qui e stampa il risultato in console

console.log (filtro_iniziali_arrow(names, iniziale));
console.log (filtro_iniziali(names, iniziale));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]