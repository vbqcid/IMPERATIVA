// const sumar = (x, y) => {

//     return x + y;

// }

// const resta = (x, y) => {

//     return x - y;

// }

// const multiplicar = (x, y) => {

//     return x * y;

// }

// const dividir = (x, y) => {

//     return x / y;

// }

const interface = require(`readline-sync`);

do{
    console.log("1.- Suma");
    console.log("2.- Resta");
    console.log("3.- Multiplicación");
    console.log("4.- Division");
    console.log("5.- Salir");
    responde = interface.question("Que operacion deseas realizar? escribe el numero: ");

    if(responde != "5"){
        const firstNumber = interface.question("Dame el primer numero: ");
        const secondNumber = interface.question("Dame el segundo numero: ");

        switch(responde){
            case "1":
                const resultado = parseInt(firstNumber) + parseInt(secondNumber);
                console.log("El resultado es: "+resultado);
                break;

            case "2":
                const resul = parseInt(firstNumber) - parseInt(secondNumber);
                console.log("El resultado es: "+resul);
                break;
            case "3":
                const result = parseInt(firstNumber) * parseInt(secondNumber);
                console.log("El resultado es: "+result)
                break;
            case "4":
                const resulta = parseInt(firstNumber) / parseInt(secondNumber);
                console.log("El resultado es: "+resulta);
            default:
                break;
        }
    }
}while(responde != "5");

