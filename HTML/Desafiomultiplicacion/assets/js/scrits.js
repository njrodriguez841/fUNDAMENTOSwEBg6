//Arrow function
let multiplicarNum = () => {

    //Solicitar el número y comentar las condiciones para el cálculo
    alert("La tabla de multiplicar del número indicado, desde 1 hasta el número ingresado, y factoriales del numero ingresado. Respuesta Por Consola");
    let numero = parseInt(prompt("Ingresa un número entre 1 y 20 "));

    if (numero < 1 || numero > 20) {
        let contador = 0;
        do {
            alert("Numero fuera de rango. Ingresa un número entre 1 y 20.");
            numero = parseInt(prompt("Ingresa un número del 1 al 20 para mostrar resultados de tabla de multiplicar"));
            contador = contador + 1;
            if (contador == 2) {
                alert("Numero ingresado fuera de rango");
                break;
            }
        }
        while (numero < 1 || numero > 20);
    } else {
        for (let i = 1; i <= numero; i++) {
            console.log(`${i} x ${numero} =  ${i * numero}`);
        }

        for (let i = 1; i <= numero; i++) {
            let factorial = 1;
            for (let j = 1; j <= i; j++) {
                factorial = factorial * j;
            }
            console.log(`El factorial de ${i}! es ${factorial}`);
        }
    }
}