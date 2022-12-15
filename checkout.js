const textRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    //!set item to LocalStorage
   localStorage.setItem("texRate", texRate);
   localStorage.setItem("shippigPrice", shippingPrice);
    //!set item to SessionStorage
   sessionStorage.setItem("texRate", texRate);
   sessionStorage.setItem("shippigPrice", shippingPrice);
});
