document.getElementById('btn-withdraw').addEventListener('click', function(){
    let withdrawNumber = innerTextValue('withdraw-total');
    let withdrawInputNumber = inputValue('withdraw-field');
    let withdrawTotalNumber = withdrawNumber + withdrawInputNumber;
    setInnerText('withdraw-total', withdrawTotalNumber);

    // balance withdraw er kaj
    let balanceWithTotal = innerTextValue('balance-total');
    if(withdrawInputNumber > balanceWithTotal || withdrawInputNumber <= 0 || isNaN(withdrawInputNumber)){
        alert('Pleas baper bank a atula tk nai or given a correct amount...');
        setInnerText('withdraw-total', "00");
        return;
    }
    let withdrawTotal = balanceWithTotal - withdrawInputNumber;
    setInnerText('balance-total', withdrawTotal);

})