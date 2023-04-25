class Product{
    constructor(id, nombre, cantidad, costo){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
}

module.exports.product = Product;