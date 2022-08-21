function innerTextValue(selectTextId){
    let selectId = document.getElementById(selectTextId);
    let selectIdString = selectId.innerText;
    let selectIdNumber = parseFloat(selectIdString);
    return selectIdNumber;
}

function inputValue(valueId){
    let inputIdSlect = document.getElementById(valueId);
    let inputIdString = inputIdSlect.value;
    let inpuIdNumber = parseFloat(inputIdString);
    inputIdSlect.value = ''
    return inpuIdNumber;
}

function setInnerText(id, value){
    let idSelect = document.getElementById(id);
    idSelect.innerText = value;
}