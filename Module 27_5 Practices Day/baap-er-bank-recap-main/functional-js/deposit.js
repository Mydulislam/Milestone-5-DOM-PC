document.getElementById('btn-deposit').addEventListener('click', function(){
    let depositNumber = innerTextValue('deposit-total');
    let inputNumber = inputValue('deposit-field');
    console.log(inputNumber);
    if(inputNumber <= 0 || isNaN(inputNumber)){
        alert('PleasE given a correct amount...');
        setInnerText('deposit-total', "00");
        return;
    }
    let depositeTotalNumber = depositNumber + inputNumber;
    setInnerText('deposit-total', depositeTotalNumber);


    // balance er kaj
    let balanceNumber = innerTextValue('balance-total');
    let balanceTotalNumber = balanceNumber + inputNumber;
    setInnerText('balance-total' , balanceTotalNumber);
})