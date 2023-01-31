const fs = require('fs');
let products = []

class ProductManager{
    constructor(filename){
        this.filename=filename
    }

    addProducts = async(title, description, price, thumbnail, code, stock) =>{
        let id
        if (products.length === 0) {
            id = 1
        } else {id = products[products.length-1].id + 1}
        products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock})
            fs.writeFileSync(this.filename, JSON.stringify(products, null, 2))
    }

    getProducts =() =>{if (fs.existsSync('products.JSON')) {
        const contenido = fs.readFileSync('products.JSON', 'utf-8')
        console.log(contenido)
    } else {
        console.log('El archivo no existe')
    }}


    getProductById = () => {
        const askid =parseInt(prompt('Escriba el id'))
        if(this.products.find(element => element.id === askid)){
           console.log("El producto ha sido encontrado") 
        } else {
            console.log("Not found")
        }

    }

    
    
}
 async function productManager () {
    const product = new ProductManager ('products.JSON')
    await product.addProducts("Shampoo Sólido", "El mejor shampoo", "$150.00", "foto1.jpg", "shamp1", "500 unidades")
    await product.addProducts("Acondicionador Sólido", "El mejor producto", "$160.00", "foto2.jpg", "aco1", "200 unidades")
    console.log(product.getProducts())
    product.getProductById()
 }

 productManager();

