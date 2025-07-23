/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

const now = new Date();
const ore = now.getHours();

// Dichiara la funzione qui.
//Arrow Function
const salutoArrow = userName => {
    if (ore <= 13){
            return `Buongiorno ${userName}`
    } else if (ore >= 13 && ore < 17){
            return `Buon pomeriggio ${userName}`
    }else{
            return `Buonasera ${userName}`
    }
}

//Function
function saluto_2 (userName){
    if (ore <= 13){
        return `Buongiorno ${userName}`
    } else if (ore >= 13 && ore < 17){
        return `Buon pomeriggio ${userName}`
    }else{
        return `Buonasera ${userName}`
    }
}


// Invoca la funzione qui e stampa il risultato in console
console.log(salutoArrow(name));
console.log(saluto_2(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.