/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
//Arrow Function
const iniziali = array_stringhe => {
    const iniziali = [];
    for (let i = 0; i < names.length; i++){
        iniziali.push(array_stringhe[i].charAt(0));
    }
    return iniziali;
}


//Function
function iniziali_2 (array_stringhe) {
    const iniziali = [];
    for (let i = 0; i < names.length; i++){
        iniziali.push(array_stringhe[i].charAt(0));
    }
    return iniziali;
}


// Invoca la funzione qui e stampa il risultato in console
console.log (iniziali(names));
console.log (iniziali_2(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"] 