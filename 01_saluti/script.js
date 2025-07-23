/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
// Arrow function
const saluto = userName => `Ciao ${userName}`

//Function
function saluto_2 (userName){
    return `Ciao ${userName}`
}

// Invoca la funzione qui e stampa il risultato in console

console.log (saluto(userName))

console.log (saluto_2(userName))

//Risultato atteso se si passa 'Mario': // ciao Mario
