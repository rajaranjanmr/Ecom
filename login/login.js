const idEl = document.querySelector("#idlogin");
const loginBtnEl = document.querySelector(".login-btn-ecom");
const cancelBtnEl = document.querySelector(".cancel-btn")
const closeEl = document.querySelector(".close-item");
loginBtnEl.addEventListener("click",()=>{
    idEl.style.display='block';
    idEl.style.zIndex = '3';
})
cancelBtnEl.addEventListener("click",()=>{
    idEl.style.display='none';
})
closeEl.addEventListener("click",()=>{
    idEl.style.display='none';
})
