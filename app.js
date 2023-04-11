let clickbtn = document.querySelector(".newsletterbtn button");
let modal = document.querySelector(".modalContent");
let subscribebtn = document.querySelector(".subscribeButton button");
let close = document.querySelector(".closebtn")
let email = document.querySelector(".inputBox input")

clickbtn.addEventListener("click", ()=>{
    modal.classList.remove("hidden")
})

close.addEventListener("click", ()=>{
    modal.classList.add("hidden");
})
subscribebtn.addEventListener("click", () =>{
    email.innerHTML = localStorage.setItem("email")
})