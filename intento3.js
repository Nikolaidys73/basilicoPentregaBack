class ProductManager {
    constructor() {
      this.productos = [];
      this.idCounter = 0;
    }
  
    addProduct(producto) {
      if (!this.isValidProduct(producto)) {
        console.log('Todos los campos del producto son obligatorios.');
        return;
      }
  
      if (this.isCodeDuplicate(producto.code)) {
        console.log(`El código "${producto.code}" ya está en uso.`);
        return;
      }
  
      producto.id = this.idCounter++;
      this.productos.push(producto);
      console.log('Producto agregado correctamente:', producto);
    }
  
    getProductById(id) {
      const producto = this.productos.find((p) => p.id === id);
      if (producto) {
        console.log('Producto encontrado:', producto);
      } else {
        console.log('Producto no encontrado.');
      }
    }
  
    isValidProduct(producto) {
      const { title, description, price, thumbnail, code, stock } = producto;
      return (
        title &&
        description &&
        price &&
        thumbnail &&
        code &&
        stock !== undefined
      );
    }
  
    isCodeDuplicate(code) {
      return this.productos.some((p) => p.code === code);
    }
  }
  
//----------------------------------------------------------------verificaciones----------------------------------------------------//
const verifyCode = new ProductManager();

verifyCode.addProduct({
  title: 'S23 Ultra',
  description: 'Samsung Galaxy S23 Ultra ',
  price: 450000,
  thumbnail: 'ruta/imagen1.jpg',
  code: 'PROD001',
  stock: 5,
});

verifyCode.addProduct({
  title: 'S23+',
  description: 'Samsung Galaxy S23 Plus',
  price: 380000,
  thumbnail: 'ruta/imagen2.jpg',
  code: 'PROD002',
  stock: 9,
});

verifyCode.addProduct({
  title: 'S22',
  description: 'Samsung Galaxy s22',
  price: 300000,
  thumbnail: 'ruta/imagen3.jpg',
  code: 'PROD001', // Código duplicado para prueba creado a proposito.
  stock: 2,
});

verifyCode.addProduct({
  title: 'Razr',
  description: 'Motorola Razr Ultra',
  price: 450000,
  thumbnail: 'ruta/imagen5.jpg',
  code: 'PROD003',
  stock: 2,
})

verifyCode.getProductById(1); // Producto encontrado: { id: 1, title: 'Producto 1', ... }
verifyCode.getProductById(5); // Producto no encontrado.
verifyCode.getProductById(7);
verifyCode.getProductById(2);
