//Variables (1-4)
let variableSinValor;
let booleano1 = true;
let booleano2 = true;
const PI = 3.14;
const TAU = 2 * PI

//Booleanos (5-7)
let booleanoAnd = booleano1 == booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//Operadores (8-9)
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

//Bucles (10-12)
let contarHasta10_2 = 0;
for (contarHasta10_2; contarHasta10_2 < 10; contarHasta10_2++) {
    if (contarHasta10_2 === 10) {
        break;
    }
    console.log("contarHasta10_2 es: " + contarHasta10_2 + "\n");
}

let postI = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
    postI += postJ++;
    console.log("Contador i=" + i + ", postI= " + postI + " y postJ= " + postJ + "\n");
}

let sumaPares = 0;
for (i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        sumaPares += i;
    }
}

//ITERACIONES - PROYECTO INDIVIDUAL

//Variables (13-15)

let variableValorNumerico = 4;
const MiNombre = "Rafa";
const MiNumeroFav = 1;

//Booleanos (16-19)

let booleanoOr = booleano1 || booleano2;
let booleanoMix1 = (booleano1 && (TAU / 2 == PI)) || (variableValorNumerico >= MiNumeroFav);
let seisNoEsNueve = 6 !== 9;
let booleanoMix2 = variableValorNumerico < (MiNumeroFav * TAU);

//Operadores (20-23)

let valorSuma = MiNumeroFav + variableValorNumerico;
let valorResta = MiNumeroFav - variableValorNumerico;
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;

//Bucles (24-26)

let contarHasta10 = 0;
while (contarHasta10 !== 10) {
    contarHasta10++;
}

let preI = 0;
let preJ = 0;
for (i = 0; i < 11; i++) {
    preI += ++preJ;
    console.log("Contador i=" + i + ", preI= " + preI + " y preJ= " + preJ + "\n");
}

let sumaImpares = 0;
for (i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        sumaImpares += i;
    }
    console.log("Contador i=" + i + " y sumaImpares= " + sumaImpares + "\n");
}