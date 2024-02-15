
function udvozles() {
    console.log("jó reggelt mindenkinek")
}

function elagazas(){

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

function ciklus2(){
    let index=0;
    while(index < 10){
        console.log(`${index}. Szép nap van!`);
        index++;
    } 
}



