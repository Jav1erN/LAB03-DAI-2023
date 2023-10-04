const autos=["BMW","MercedesBenz","Volvo"];
console.log(autos);
console.log[0];
console.log[2];
for(let i=0;i<autos.length;i++){
    console.log(i+":"+autos[i])
}
autos[1]="MercedesBenz";
console.log(autos[1]);

autos.push("Audi");
console.log(autos);