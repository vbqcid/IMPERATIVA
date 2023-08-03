// micro desafio 1

function test1(x, y){
    return y - x
}

test1(10, 40)

// El resultado es 30

// micro desafio 2

function test2(x, y) {
    return x * 2
    console.log(x)
}

test2(10)

// El resultado arroja 20 ya que el resto no da

// // 

function convertir(pulg){
    return pulg * 2.54
}

console.log(convertir(5))

// funciones simples 2
function url(word){
    return "http://www." + word + ".com"
}

console.log(url("Juan"))


// funciones simples 3
function url2(word){
    return word + "!"

}

console.log(url2("Juan aún sigue aqui"))

// funciones simples 4
function dog(edad){
    return edad * 7

}

console.log(dog (5))

// funciones simples 5
function valorhora(sueldo){
    return sueldo / 40
}

console.log(valorhora(250000))

// funciones simples 6
function calculadora(h,p){
    return p/ h**2
    
}
console.log(calculadora(1.50, 50))
