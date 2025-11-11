  // ===============================
// MÓDULO 2 - FUNDAMENTOS DE PROGRAMACIÓN
// PRIMERA EVALUACIÓN - Semana 10
// ===============================

// 1️⃣ Lotería: Mostrar números del 1 al 50 con “Lotería” en los números elegidos.
let num1 = parseInt(prompt("Ingrese el primer número (1-50):"));
let num2 = parseInt(prompt("Ingrese el segundo número (1-50):"));

for (let i = 1; i <= 50; i++) {
  if (i === num1 || i === num2) {
    console.log("¡Lotería!");
  } else {
    console.log(i);
  }
}

// 2️⃣ FizzBuzz: múltiplos de 3 → Fizz, de 5 → Buzz, de ambos → FizzBuzz.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 3️⃣ Invertir un arreglo usando for
let arreglo = [5, 1, 8, 6, 3];
let arregloNuevo = [];

for (let i = arreglo.length - 1; i >= 0; i--) {
  arregloNuevo.push(arreglo[i]);
}

console.log("Arreglo original:", arreglo);
console.log("Arreglo invertido:", arregloNuevo);

// 4️⃣ Encontrar el número mayor de un arreglo
let arreglo2 = [4, 5, 1, 8, 3];
let mayor = arreglo2[0];

for (let i = 1; i < arreglo2.length; i++) {
  if (arreglo2[i] > mayor) {
    mayor = arreglo2[i];
  }
}
console.log("El número mayor es:", mayor);

// 5️⃣ Crear un nuevo arreglo con los números pares
let arreglo3 = [3, 4, 5, 12, 6, 1, 13];
let arregloPar = [];

for (let i = 0; i < arreglo3.length; i++) {
  if (arreglo3[i] % 2 === 0) {
    arregloPar.push(arreglo3[i]);
  }
}
console.log("Números pares:", arregloPar);

// 6️⃣ Mostrar los libros con estado de lectura “true”
const library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", readingStatus: false }
];

for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus === true) {
    console.log(`Libro: "${library[i].title}" - Autor: ${library[i].author}`);
  }
}

// 7️⃣ Rueda: tamaño y grosor
let diametro = parseFloat(prompt("Ingrese el diámetro de la rueda (en metros):"));
let grosor = parseFloat(prompt("Ingrese el grosor de la rueda (en metros):"));

if (diametro > 1.4) {
  console.log("La rueda es para un vehículo grande.");
} else if (diametro > 0.8) {
  console.log("La rueda es para un vehículo mediano.");
} else {
  console.log("La rueda es para un vehículo pequeño.");
}

if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
  console.log("El grosor para esta rueda es inferior al recomendado.");
}

// 8️⃣ Helado con topping
let topping = prompt("Ingrese el topping que desea (oreo, KitKat, brownie o ninguno):").toLowerCase();
let precioBase = 50;
let precioFinal = precioBase;

if (topping === "oreo") {
  precioFinal += 10;
} else if (topping === "kitkat") {
  precioFinal += 15;
} else if (topping === "brownie") {
  precioFinal += 20;
} else if (topping !== "ninguno") {
  console.log("No tenemos este topping, lo sentimos.");
}
console.log(`El precio final del helado es: ${precioFinal} MXN`);

// 9️⃣ Programa educativo con becas
let curso = prompt("Ingrese el curso (Course, Carrera, Master):").toLowerCase();
let beca = prompt("¿Tiene alguna beca? (Facebook, Google, Jesua o Ninguna):").toLowerCase();

let costoMensual = 0;
let duracion = 0;

if (curso === "course") {
  costoMensual = 4999;
  duracion = 2;
} else if (curso === "carrera") {
  costoMensual = 3999;
  duracion = 6;
} else if (curso === "master") {
  costoMensual = 2999;
  duracion = 12;
} else {
  console.log("Curso no válido.");
}

let descuento = 0;

if (beca === "facebook") {
  descuento = 0.20;
} else if (beca === "google") {
  descuento = 0.15;
} else if (beca === "jesua") {
  descuento = 0.50;
}

let precioConDescuento = costoMensual * (1 - descuento);
let total = precioConDescuento * duracion;

console.log(`Precio mensual con descuento: ${precioConDescuento} MXN`);
console.log(`Total por todo el curso: ${total} MXN`);

// 🔟 Cálculo de pago por distancia y tipo de vehículo
let tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto o autobús):").toLowerCase();
let kms = parseFloat(prompt("Ingrese la cantidad de kms recorridos:"));
let litros = parseFloat(prompt("Ingrese los litros consumidos:"));
let precioKm = 0;

if (tipoVehiculo === "coche") {
  precioKm = 0.20;
} else if (tipoVehiculo === "moto") {
  precioKm = 0.10;
} else if (tipoVehiculo === "autobús" || tipoVehiculo === "autobus") {
  precioKm = 0.5;
} else {
  console.log("Tipo de vehículo no válido.");
}

let extra = litros <= 100 ? 5 : 10;
let totalPagar = (precioKm * kms) + extra;

console.log(`El total a pagar es: ${totalPagar} unidades monetarias.`);
