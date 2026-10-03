let event = 0;

const nameInput = document.querySelector("#name"),
    anyChoiseBtn = document.querySelector(".change")
    containerImg = document.querySelector(".container .img"),
    article = document.querySelector(".article"),
    form = document.querySelector(".form");


nameInput.classList.toggle("hide");

anyChoiseBtn.addEventListener("click", e=>{
    e.preventDefault()
    event = (event+1)%2;
    containerImg.classList.toggle("change");
    article.classList.toggle("to-right");
    form.classList.toggle("to-left");
    nameInput.classList.toggle("hide");
    if(event){
        document.body.classList.add("change-gradient");
    }else{
        document.body.classList.remove("change-gradient")
    }
})