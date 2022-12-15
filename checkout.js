const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    //!set item to LocalStorage
   localStorage.setItem("taxRate", taxRate);
   localStorage.setItem("shippigPrice", shippingPrice);
    //!set item to SessionStorage
//    sessionStorage.setItem("taxRate", taxRate);
//    sessionStorage.setItem("shippigPrice", shippingPrice);
});

//? capturing method
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event)=>{
    if(event.target.className =="minus"){
        if(event.target.nextElementSibling.innerText > 1){
            event.target.nextElementSibling.innerText--; //* sonraki kardeşini innertextini 1 azalt demek
            //parameter == selected productInfoDiv
            calculateProductAndCartTotal(element.target.parentElement.parentElement);

        }else{
            if(confirm("Product will be deleted")){
               event.target.parentElement.parentElement.parentElement.remove();
               calculateCartTotal();
               
            }

        }
        
        
        //*console.log("minus button clicked");
    }else if(event.target.classList.contains("plus")){
        event.target.previousElementSibling.innerText++;
        //parameter == selected productInfoDiv
        calculateProductAndCartTotal(element.target.parentElement.parentElement);
        //*console.log("plus button clicked"
    }else if(event.target.classList.contains("remove-product")){
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();

        //*console.log("remove button clicked")
    }
    else{
        console.log("other element clicked")
    }
});

//* calculate cart and product totals
const calculateProductAndCartTotal = (productInfoDiv) =>{
 // product calculation  
 let quentity =
 let price =



// cart calculation
const calculateCartTotal();
}

//* calculate cart totals
const calculateCartTotal() => {

}

