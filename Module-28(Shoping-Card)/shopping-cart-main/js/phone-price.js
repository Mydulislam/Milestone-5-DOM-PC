document.getElementById('phone-quantiy-increase').addEventListener('click',function(){
    let phonePrice = phonePlus();
    let caseingPrice = casingPlus()
    let totalPrice = phonePrice + caseingPrice;
    let subTotalSelect = document.getElementById('sub-total');
    subTotalSelect.innerText = totalPrice;
})
document.getElementById('phone-quantity-decrease').addEventListener('click',function(){
    let phonePrice = phonMinus();
    let caseingPrice = casingMinus();
    let totalPrice = phonePrice + caseingPrice;
    let subTotalSelect = document.getElementById('sub-total');
    subTotalSelect.innerText = totalPrice;
})

