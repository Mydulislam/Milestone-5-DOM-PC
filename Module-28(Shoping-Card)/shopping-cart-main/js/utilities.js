function phonePlus(){
    let phoneInputQuantity = document.getElementById('phone-quantity');
    let phoneQuantityString = phoneInputQuantity.value;
    let phoneQuantityNumber = parseInt(phoneQuantityString);
    let increasePhoneQuantity = phoneQuantityNumber + 1;
    phoneInputQuantity.value = increasePhoneQuantity;
    
    let phoneQuantityPrice = document.getElementById('phone-price');
    let phoneQuantityPriceTotal = increasePhoneQuantity * 1219;
    phoneQuantityPrice.innerText = phoneQuantityPriceTotal;
    return phoneQuantityPriceTotal;
}

function phonMinus(){
    let phoneInputQuantity = document.getElementById('phone-quantity');
    let phoneQuantityString = phoneInputQuantity.value;
    let phoneQuantityNumber = parseInt(phoneQuantityString);
    let decreasePhoneQuantity = phoneQuantityNumber - 1;
    phoneInputQuantity.value = decreasePhoneQuantity;
    
    let phoneQuantityPrice = document.getElementById('phone-price');
    let phoneQuantityPriceTotal = decreasePhoneQuantity * 1219;
    phoneQuantityPrice.innerText = phoneQuantityPriceTotal;
    return phoneQuantityPriceTotal;
}

// casing price 

function casingPlus(){
    let caseInputQuantity = document.getElementById('case-quantity');
    let caseInputQuantityString = caseInputQuantity.value;
    let caseInputQuantityNumber = parseInt(caseInputQuantityString);
    let increaseCaseQuantity = caseInputQuantityNumber + 1;
    caseInputQuantity.value = increaseCaseQuantity;

    let casePrice = document.getElementById('case-price');
    let totalCasePrice = increaseCaseQuantity * 59;
    casePrice.innerText = totalCasePrice;
    return totalCasePrice;
}

function casingMinus(){
    let caseInputQuantity = document.getElementById('case-quantity');
    let caseInputQuantityString = caseInputQuantity.value;
    let caseInputQuantityNumber = parseInt(caseInputQuantityString);
    let decreaseCaseQuantity = caseInputQuantityNumber - 1;
    caseInputQuantity.value = decreaseCaseQuantity;

    let casePrice = document.getElementById('case-price');
    let totalCasePrice = decreaseCaseQuantity * 59;
    casePrice.innerText = totalCasePrice;
    return totalCasePrice;
}