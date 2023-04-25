class Inventory{
    constructor(){
        this.productos = [
            // {id: 1, nombre: 'Producto1', cantidad: 10, costo: 10},
            // {id: 2, nombre: 'Producto2', cantidad: 20, costo: 20},
            // {id: 3, nombre: 'Producto3', cantidad: 30, costo: 30}
        ];
    }

    add(nuevo){
        this.productos.push(nuevo);
    }

    buscar(id){
        if (this.productos.length === 0){
            return `
            <html>
                <body style="background-color: rgb(73, 73, 73)">
                    <p style="font-size: 65px;">El inventario está vacío 💀</p>
                </body>
            </html>
            `;
        } else{
            for (let i=0; i<this.productos.length; i++){
                if (this.productos[i].id === id){
                    return this.productos[i];
                }
            }
            return `
            <html>
                <body style="background-color: rgb(73, 73, 73)">
                    <p style="font-size: 65px;">No hay productos con el id ${id} 🤡</p>
                </body>
            </html>
            `;
        }
    }

    list(){
        if (this.productos.length === 0){
            return `
            <html>
                <body style="background-color: rgb(73, 73, 73)">
                    <p style="font-size: 65px;">El inventario está vacío 💀</p>
                </body>
            </html>
            `;
        } else{
            return this.productos;
        }
    }
}

module.exports = Inventory;