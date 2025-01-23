let sugg = document.querySelector(".sugg");
let button = document.querySelector(".suggestions")
console.dir(sugg);


const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

const taxPayableold = box1.querySelector('.taxold');
const taxPayablenew = box2.querySelector('.taxnew');

let oldTaxValue = parseFloat(taxPayableold.textContent.replace("Tax Payable: ₹", ""));
let newTaxValue = parseFloat(taxPayablenew.textContent.replace("Tax Payable: ₹", ""));

if (newTaxValue > oldTaxValue) {
    box1.style.backgroundColor = '#90EE90';
} else {
    box2.style.backgroundColor = '#90EE90';
}



button.addEventListener("click",()=>{
    sugg.children[0].classList.toggle("hide");
})

