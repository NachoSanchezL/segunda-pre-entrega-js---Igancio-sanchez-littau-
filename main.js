class Bebidas {
    constructor(nombre, precio, marca){
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    }


}

const bebidas = []

bebidas.push(new Bebidas("Fernet", 1000, "Branca"))
bebidas.push(new Bebidas("Ron", 1700, "Havana"))
bebidas.push(new Bebidas("Gin", 1600, "Merle"))
bebidas.push(new Bebidas("Campari", 1300, "Campari"))
bebidas.push(new Bebidas("Cerveza", 800, "Heineken"))
bebidas.push(new Bebidas("Champagne", 4000, "Chandon"))

console.log(bebidas)

let nuevaBebida = 0 
while (nuevaBebida < 3) {

let pregunta = new Bebidas(prompt("Ingresa la nueva bebida"),
        Number(prompt("Ingresa el precio")),
        (prompt("Ingresa la marca")))
        bebidas.push(pregunta)

    nuevaBebida ++

}

console.log(bebidas)



function filtrarPorPrecio(precio){
        return bebidas.filter(propiedad => propiedad.precio <= Number(precio))
}
        console.log(filtrarPorPrecio(1200))