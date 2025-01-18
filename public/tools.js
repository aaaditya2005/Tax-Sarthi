let label = document.querySelectorAll(".names label");
let income_details = document.querySelector(".income_details");
let deduction = document.querySelector(".deduction");


label[1].addEventListener("click",()=>{
    let check = label[1].nextElementSibling;
    // if(check.checked == true){
    label[1].style.backgroundColor = "green";
    label[0].style.backgroundColor = "unset";

        deduction.classList.remove("hide");
        income_details.classList.add("hide");
        
    // }else
    // deduction.classList.toggle("hide");
    // income_details.classList
});

label[0].addEventListener("click",()=>{
    let check = label[0].nextElementSibling;
    // if(check.checked == true){
        label[0].style.backgroundColor = "green";
        label[1].style.backgroundColor = "unset";
        deduction.classList.add("hide");
        income_details.classList.remove("hide");
    // }else
    // deduction.classList.toggle("hide");
    // income_details.classList
});



