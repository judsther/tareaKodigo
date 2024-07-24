/* 1. Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. */

function edadIntroducida(edad){

let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";

console.log(mensaje);}

edadIntroducida(19);


/* 2. Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
Examen =20%
tareas = 40%
asistencia = 10%
investigación = 30% */


function notaFinal (nombre,carnet,examen,tareas,asistencia,investigacion){

    let porcentajeExamen = 0.20;
    let porcentajeTareas = 0.40;
    let porcentajeAsistencia = 0.10;
    let porcentajeInvestigacion = 0.30;
    

    let total = (examen * porcentajeExamen)+(tareas * porcentajeTareas)+(asistencia * porcentajeAsistencia)+(investigacion * porcentajeInvestigacion); 

    console.log("la nota final de " + nombre + " con carnet: " + carnet + " es de: " + total);
}

notaFinal("Juan","14071104-2014",8,7,10,7)

/* 3. Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. Deberá demostrar los datos del empleado y el aumento salarial. 

CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20% */

let trabajadores = [
    {
        nombre: "Juan Pérez",
        categoria: "C",
        sueldo: 450 
    },
    {
        nombre: "Alejandra Salazar",
        categoria: "B",
        sueldo: 500 
    },
    {
        nombre: "Laura Montenegro",
        categoria: "A",
        sueldo: 775 
    },
    {
        nombre: "Saul Moreno",
        categoria: "D",
        sueldo: 425
    }    
]
let nuevo_salario = 0;
for(let i = 0; i < trabajadores.length; i++){
   
    let sueldo = trabajadores[i].sueldo 


switch (trabajadores[i].categoria) {
    case "A":
       nuevo_salario = sueldo + (sueldo * 0.15)
        break;

    case "B":
        nuevo_salario = sueldo + (sueldo * 0.30)
        break;

    case "C":
        nuevo_salario = sueldo + (sueldo * 0.10)
        break;    
    
    case "D":
        nuevo_salario = sueldo + (sueldo * 0.20)
        break;    

    default:
        nuevo_salario = 'error'
        break;
} 
console.log("El nuevo salario de " + trabajadores[i].nombre + " es de: " + nuevo_salario);
}

/* 4. Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.*/

function numeroMayor(a,b){
    if(a > b){
        return a;
    } else { return b;}
}

console.log(numeroMayor(3,7))

/* 5. Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario. */

function descuentoCompra(){
    const coche = document.getElementById('tipo-coche').value;
    let descuento = 0

    switch (coche) {
        case "FORD FIESTA":
            descuento = "5%";
            break;

        case "FORD FOCUS":
            descuento = "10%";
            break;    
            
        case "FORD ESCAPE":
            descuento = "20%";
            break; 

        default:
            descuento = 0
            break;
    }

    const resultado = "Su descuento es de: " + descuento; 
    document.getElementById('resultado').innerText = resultado;
}


/* 6. Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:

Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */

function descuentoViaje(origen, destino) {
    let descuento = 0;

    if (origen == 'Palma') {
        switch (destino) {
            case 'La costa del Sol':
                descuento = "5%";
                break;
            case 'Panchimalco':
                descuento = "10%";
                break;
            case 'Puerto el Triunfo':
                descuento = "15%";
                break;

            default:
                descuento = 0;
        }
    }

    return descuento;
}

console.log(descuentoViaje('Palma', 'Panchimalco'))


/* 7. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */
function diezNumeros(arreglo){
let valore = [];
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let valorPares = 0;

for (let i = 0; i <= valores.length; i++) {
    let valor = valores[i];

    if (valor < 0) {
        return negativos++;
    } 
    if (valor > 0) {
       return positivos++;
    }
    if (valor % 15 === 0) {
      return multiplosDe15++;
    }

    if (valor % 2 === 0) {
       return valorPares += valor;
    }
}
console.log("Cantidad de valores negativos: " + negativos);
console.log("Cantidad de valores positivos: " + positivos);
console.log("Cantidad de valores múltiplos de 15 : " + multiplosDe15);
console.log("Suma de los números pares " + valorPares)
}

console.log(diezNumeros(2,3,4,7,23,65,74,23,22,8));

/* 8. Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario. */

function mostrarTabla() {
    const numero = document.getElementById('numero').value;
    const tablaDiv = document.getElementById('tabla');
    tablaDiv.innerHTML = ''; 


    const lista = document.createElement('ul');
    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        lista.appendChild(item);
    }

    tablaDiv.appendChild(lista);
}

/* 9. Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

function CelsiusFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const resultadoDiv = document.getElementById('Respuesta');
    resultadoDiv.innerHTML = ''; 

    const fahrenheit = (celsius * 9/5) + 32;
    let mensaje;

    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }

    resultadoDiv.innerHTML = `<p>${celsius}°C es igual a ${fahrenheit.toFixed(2)}°F. ${mensaje}</p>`;
}


/*Ejercicio 10 */

function calcularPromedios() {
    const edadesManana = document.getElementById('manana').value.split(',').map(Number);
    const edadesTarde = document.getElementById('tarde').value.split(',').map(Number);
    const edadesNoche = document.getElementById('noche').value.split(',').map(Number);

    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);

    const resultadosDiv = document.getElementById('Calcular');
    resultadosDiv.innerHTML = `
        <p>Promedio de edades del turno mañana: ${promedioManana.toFixed(2)}</p>
        <p>Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}</p>
        <p>Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}</p>
    `;

    let mensaje;
    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
        mensaje = "El turno con el promedio de edades mayor es el turno mañana.";
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
        mensaje = "El turno con el promedio de edades mayor es el turno tarde.";
    } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
        mensaje = "El turno con el promedio de edades mayor es el turno noche.";
    } else {
        mensaje = "Hay un empate en los promedios de edades.";
    }

    resultadosDiv.innerHTML += `<p>${mensaje}</p>`;
}

function calcularPromedio(edades) {
    const total = edades.reduce((sum, edad) => sum + edad, 0);
    return total / edades.length;
}