//! Let's create our first class 
//* let create class Product 

class Product {
    //* Here we don't need var, let and const to create properties which was called "Data Member"
    productName;
    productPrice;
    productModel; 
    productDescription; 

    //* Let's create Member Function and we create member in classes without keyword 
    buyProduct() {
        console.log("Product bought");
    };

    cancelProduct() {
        console.log("Product Cancel"); 
    };

    addToCart() {
        console.log("Add Product to Cart");
    };

    removeFromCart(){
        console.log("Remove Product from Cart");
    };
}; 

