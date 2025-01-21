let sugg = document.querySelector(".sugg");
let button = document.querySelector(".suggestions")
console.dir(sugg);

button.addEventListener("click",()=>{
    sugg.children[0].classList.toggle("hide");
})

