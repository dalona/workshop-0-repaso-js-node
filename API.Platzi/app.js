document.getElementById('fetch-products').addEventListener('click',() =>{
    fetchProducts();
})


const fetchProducts = async () => {
    const response = await fetch ('https://api.escuelajs.co/api/v1/products')
    const data = await response.json();
    console.log(data)

    const container = document.getElementById('products-list')

    data.forEach(product => {
        container.innerHTML += /*html*/ `
            <div>
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <img src=${product.images} alt="images">
                <h3>$${product.price}.00</h3>
                <p>Category:${product.category.id}${product.category.name}</p>
            </div>
        `
    });
};



