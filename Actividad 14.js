let miNuero="17";
let edad=Number(miNuero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    if(edad>=18){
        console.log("Puede votar");
    }
    else{
        console.log("muy joven pa votar");
    }
}

if(isNaN(edad)){
    console.log("Noes un numero");
}
else{
    let resultado=(edad>=18)?"Puede votar":"Muy joven para votar";
    console.log(resultado)
}