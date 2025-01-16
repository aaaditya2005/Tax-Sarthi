let info = document.querySelectorAll(".main .menu .content ul .infoLi");
let btns = document.querySelectorAll(".main .menu .option");

for(infoli of info){
    let btn = infoli.children[0];
    let check = infoli.children[1];
    let para = infoli.children[2];
    btn.addEventListener("click",()=>{
        if(check.checked == true){
            para.classList.remove("hide");
        }else{
            para.classList.add("hide");
        }
        
    });
}

btns[0].addEventListener("click",()=>{
    let check = btns[0].parentElement.nextElementSibling.checked;
    let content = document.querySelector(".main .menu .content .info")
    if(check == true){
        content.classList.remove("hide");
    }else{
        content.classList.add("hide");
    }
})

// for(btn of btns){
    
//     btn.addEventListener("click",()=>{
//         let check = btn.parentElement.nextElementSibling.checked;
//         let content = document.querySelector(".main .menu .content .info")
//         if(check == true){
//             content.classList.remove("hide");
//         }else{
//             content.classList.add("hide");
//         }
//     })
// }

// --------------------------------------------------------

let icons = document.querySelector(".icons");
let header = document.querySelector("header");
let iconCheck = document.querySelector("#bars");

icons.children[0].addEventListener("click",()=>{
    if(iconCheck.checked == false){
        icons.children[0].classList.add("hide");
        icons.children[1].classList.remove("hide");
    }

});

icons.children[1].addEventListener("click",()=>{
    if(iconCheck.checked == true){
        icons.children[0].classList.remove("hide");
        icons.children[1].classList.add("hide");

    }
});

