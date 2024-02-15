import {udvozles,elagazas} from "."

udvozles()

export function udvozles() {
    console.log("jó reggelt mindenkinek")
}
console.log(szam)
/* változók létrehozása, deklaráció */
/* var let const using */
/* hatókört jelentenek - hol láthatóak az egyes változók */
/* var a régi */
var szam = "0"
let nev = "Jenő"

console.log(szam + "típusa:" + typeof szam)
console.log(nev + "típusa:" + typeof nev)
console.log(`${szam} típusa: ${typeof szam}`)

export function elagazas(){

    /* Írj kódot, ami a aszam váltotóról eldönti, hogy 0, páros, páratlan */

    //egysoros megjegyzés
    //* == a két értéket hasonlít össze */
    //* === a két értéket és a két típust is összehasonlítja */

    if (szam===0){ //"0"===0 az egyik szöveg a másik szám
        console.log(`a szam változó értéke 0`)
    }else if (szam%2===0){ //"0"%2 --> 0 % 2 -> 0
        console.log(`a szam változó értéke páros`)
    }else if (szam%2===1){
            console.log(`a szam változó értéke páratlan`)
    }/*else{
        console.log(`a szam változó nem szám`)
    }*/
}

/* Írjunk ki 10x a consolra, hogy "Szép nap van!" */
export function ciklus1(){
    for (let index = 0; index < 10; index++) {
        console.log(`${index}. Szép nap van!`)
    }
}

/* Írjunk ki 10x a consolra, hogy "Szép nap van!" while ciklussal */
export function ciklus2(){
    let index=0;
    while(index < 10){
        console.log(`${index}. Szép nap van!`);
        index++;
    } 
}
