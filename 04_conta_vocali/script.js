/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const arrayVocali = ['a', 'e', 'i', 'o', 'u'];

// Dichiara la funzione qui.

//Arrow Function
const contaVocaliArrow = parola => {
    let numero_vocali = 0;
    for (let i = 0; i < parola.length; i++){
        if (parola[i] === "a" || parola[i] === "e" || parola[i] === "i" || parola[i] === "o" || parola[i] === "u"){
            numero_vocali++;
        }
    }
    return numero_vocali;
}


//Function
function contaVocali(parola){
    let numero_vocali = 0;
    for (let i = 0; i < parola.length; i++){
        if (arrayVocali.includes(parola[i])){
            numero_vocali++;
        }
    }
    return numero_vocali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log (contaVocali(word));

console.log (contaVocaliArrow(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)