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
  
