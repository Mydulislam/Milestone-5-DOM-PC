// case price
document.getElementById('case-quantity-increase').addEventListener('click',function(){
    let caseingPrice = casingPlus()
    let phonePrice = phonePlus();
    let totalPrice = phonePrice + caseingPrice;
    let subTotalSelect = document.getElementById('sub-total');
    subTotalSelect.innerText = totalPrice;
})

document.getElementById('case-quantity-decrease').addEventListener('click',function(){
    let caseingPrice = casingPlus()
    let phonePrice = phonePlus();
    let totalPrice = phonePrice + caseingPrice;
    let subTotalSelect = document.getElementById('sub-total');
    subTotalSelect.innerText = totalPrice;
})