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
    console.log(event.target);
})