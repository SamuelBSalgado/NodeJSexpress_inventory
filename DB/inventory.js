class Inventory{
    constructor(){
        this.productos = [
            {id: 1, nombre: 'Producto1', cantidad: 10, precio: 10},
            {id: 2, nombre: 'Producto2', cantidad: 20, precio: 20},
            {id: 3, nombre: 'Producto3', cantidad: 30, precio: 30}
        ];
    }

    add(nuevo){
        
    }

    buscar(id){
        
    }

    list(){
        
    }
}

const inventory = new Inventory().productos;
console.log(inventory);