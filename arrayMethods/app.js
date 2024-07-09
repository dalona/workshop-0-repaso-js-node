



const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
    { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
    { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
    { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
    { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
    { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
];


const $listProducts = document.getElementById('view');/*Pintar boton*/
const $lista = document.getElementById("lista") /*Para poderlos pintar en forma de la lista que yo tengo en HTML */
const $totalValueButton = document.getElementById("totalValueButton")
const $filterByCategorybutton = document.getElementById ("btn-filter-by-product")

$listProducts.addEventListener('click', (e)=> {
    $lista.innerHTML = ``;
    e.stopPropagation();
    products.forEach(product => {
        const $item = document.createElement('li')
        $item.textContent = `ID:${product.id} Name: ${product.name} Category: ${product.category} Price: ${product.price} Stock: ${product.stock}`
        
        $lista.appendChild($item)
        
    })
})

$totalValueButton.addEventListener('click', (e) => {
    TotalValue(products);
})


$filterByCategorybutton.addEventListener('click', (e) => {
    let categoryRequest = prompt("Enter the keyword").trim()
   
    if (categoryRequest){
        FilterbyCategory(products,categoryRequest);
    }else{
        alert('Please enter all the fields')
    }
})


const TotalValue = () => {
    const TotalValue = products.reduce((contador, currentValuei) => contador + currentValuei.price, 0)
    document.getElementById('totalValue').textContent = `The Total value of the stock is: ${TotalValue}`


}

const FilterbyCategory = (products,category) => {
    const productByCategory = products.filter((product) => category === product.category)
    if(productByCategory.length){
        productByCategory.forEach(product =>{
            const $item = document.createElement('h3')
            $item.textContent = `Products by Category : ${product.name}`
            const $showproductsByCategory = document.getElementById('category')
            
            $showproductsByCategory.appendChild($item)
        })
    }else{
        alert("No hay productos por esa categorias") 
    }
}
