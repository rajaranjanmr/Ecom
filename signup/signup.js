const idElSignup = document.querySelector("#idsignup");
const signupBtnEl = document.querySelector(".signup-btn-ecom");
const cancelBtnElSignup = document.querySelector("#cancel-btn-signup")
const closeElSignup = document.querySelector("#close-signup");
signupBtnEl.addEventListener("click",()=>{
    idElSignup.style.display='block';
    idElSignup.style.zIndex = '3';
})
cancelBtnElSignup.addEventListener("click",()=>{
    idElSignup.style.display='none';
})
closeElSignup.addEventListener("click",()=>{
    idElSignup.style.display='none';
})
