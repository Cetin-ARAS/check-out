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
        event.target.nextElementSibling.innerText--; //* sonraki kardeşini innertextini 1 azalt demek
        //*console.log("minus button clicked");
    }else if(event.target.classList.contains("plus")){
        event.target.previousElementSibling.innerText++;
        //*console.log("plus button clicked"
    }else if(event.target.classList.contains("remove-product")){
        event.target.parentElement.parentElement.parentElement.remove();
        //*console.log("remove button clicked")
    }
    else{
        console.log("other element clicked")
    }
});