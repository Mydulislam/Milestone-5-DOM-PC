// document.getElementById('btn-discount').addEventListener('click',function(){
//     let inputPrice = document.getElementById('input-price');
//     let inputPriceValue = inputPrice.value;
//     let inputPriceNumber = parseFloat(inputPriceValue);
//     let discountPrice = inputPriceNumber - (inputPriceNumber * (30/100))
//     document.getElementById('dicount-id').innerText = discountPrice;
// })

document.getElementById('btn-dom').addEventListener('click',function(){
    let inputText = document.getElementById('input-dom');
    let inputTextValue = inputText.value;
    if(inputTextValue === 'DOM'){
        document.getElementById('btn-discount').addEventListener('click',function(){
            let inputPrice = document.getElementById('input-price');
            let inputPriceValue = inputPrice.value;
            let inputPriceNumber = parseFloat(inputPriceValue);
            let discountPrice = inputPriceNumber - (inputPriceNumber * (30/100))
            document.getElementById('dicount-id').innerText = discountPrice;
        })
    }
    else{
        console.log('false')
    }
})