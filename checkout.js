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
        console.log("minus button clicked");
    }else if(event.target.classList.contains("plus")){
        console.log("plus button clicked")
    }else if(event.target.classList.contains("remove-product")){
        console.log("remove button clicked")
    };
    // console.log(event.target);
})