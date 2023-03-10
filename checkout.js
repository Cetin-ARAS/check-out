// const taxRate = 0.18;
// const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    //!set item to LocalStorage
//    localStorage.setItem("taxRate", taxRate);
//    localStorage.setItem("shippigPrice", shippingPrice);
    //!set item to SessionStorage
//    sessionStorage.setItem("taxRate", taxRate);
//    sessionStorage.setItem("shippigPrice", shippingPrice);
});

//? capturing method
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event)=>{
    if(event.target.className =="minus"){
        let quantityP = event.target.nextElementSibling;
        if(quantityP.innerText > 1){
           quantityP.innerText--; //* sonraki kardeşini innertextini 1 azalt demek
            //parameter == selected productInfoDiv
            calculateProductAndCartTotal(event.target.parentElement.parentElement);
        }
        else{
            if(confirm("Product will be deleted")) {
               event.target.parentElement.parentElement.parentElement.remove();
               calculateCartTotal();
               
            }

        }
        
        
        //*console.log("minus button clicked");
    }
    else if(event.target.classList.contains("plus")){
        event.target.previousElementSibling.innerText++;
        //parameter == selected productInfoDiv
        calculateProductAndCartTotal(event.target.parentElement.parentElement);
        //*console.log("plus button clicked"
    }
    else if(event.target.classList.contains("remove-product")){
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();
        //*console.log("remove button clicked")
    }
    else{
        // console.log("other element clicked")
    }
});

//* calculate cart and product totals
 const calculateProductAndCartTotal = (productInfoDiv) =>{
 // product calculation  
/*  console.log(productInfoDiv); */
 let price = productInfoDiv.querySelector("strong").innerText;
 let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
 let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
 productTotalDiv.innerText = (price * quantity).toFixed(2);
// cart calculation
calculateCartTotal();
}

//* calculate cart totals
const calculateCartTotal = () =>{
    // nodeList Div
    let  productsTotalPriceDivs = document.querySelectorAll(".product-line-price")  // documentın amacı tüm productlerı almak
    let subTotal = 0;
    productsTotalPriceDivs.forEach((productsTotalPriceDiv)=>{
        subTotal += parseFloat(productsTotalPriceDiv.innerText)
    });
    
    let taxPrice = subTotal * localStorage.getItem("taxRate")
    let shippingPrice = (subTotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0);
    let cartTotal = subTotal + taxPrice + shippingPrice;

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subTotal.toFixed(2)

    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2)
   
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shippingPrice.toFixed(2)

    document.querySelector("#cart-total").lastElementChild.innerText = cartTotal.toFixed(2)
}