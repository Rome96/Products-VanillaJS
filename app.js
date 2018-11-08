class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name} 
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Ye ar</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        
    }

    resetForm(){
        document.getElementById('form-product').reset(); //resetear los campos del formulario
    }

    deleteProduct(element){
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully', 'info')
        }

    }

    showMessage(message, cssClass){
        const me = document.createElement('div');
        me.className = `alert alert-${cssClass} mt-2`;   
        me.appendChild(document.createTextNode(message));

        //MOSTRANDO EN EL DOM
       const container = document.querySelector('.container');
       const app = document.querySelector('#app');
       container.insertBefore(me, app);

       setTimeout(function(){
            document.querySelector('.alert').remove();
       }, 2000);
    } 
}

//DOM EVENT

document.getElementById('form-product').addEventListener('submit', function(e) {
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year = document.getElementById('year').value;
    
   const product = new Product (name, price, year)

   const ui = new UI();

    if(name === '' || price === '' || year === ''){
      return ui.showMessage('Complete Fields', 'danger');
    }

   ui.addProduct(product);
   ui.resetForm();
   ui.showMessage('Product Added Seccessfully', 'success')



   e.preventDefault()
});


document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})