let bookOn = document.getElementById("bookOn");
let inputBox = document.getElementById("inputBox");
let ok = document.getElementById("ok");
let cancel = document.getElementById("cancel");
let bookPage = document.getElementById("bookPage")

bookOn.addEventListener("click",()=>{
    bookPage.classList.toggle("book-page");
})
ok.addEventListener("click",()=>{
    if(inputBox.value == ""){
        inputBox.placeholder = "Waryaa Form-ka Buuxi";
    }
    else if (inputBox.value != "00995"){
        inputBox.placeholder ="Laxay iska sax";
        inputBox.value ="";
    }
    else{
        bookPage.classList.remove("book-page");
        bookOn.querySelector("p").textContent = "Shaqayso Dee";
    }
});

cancel.addEventListener("click",()=>{
    bookPage.classList.remove("book-page");
})