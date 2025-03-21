const handleToCart = () => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('productQuantity');

    const name = productName.value;
    const quantity = productQuantity.value;


    console.log(name,quantity)

    productName.value="";
    productQuantity.value="";
}


const displayProduct = (productName,quantity)=>{
    const  productContainer = document.getElementById('product-container');

    const li =document.createElement("li");
    li.innerText = `${productName}: ${quantity}`;
    productContainer.appendChild(li)
}
