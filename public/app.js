const distanceDisplay = document.querySelector("#distance");
const amountDisplay = document.querySelector("#amount");
const consumptionDisplay = document.querySelector("#consumption");
const balanceDisplay = document.querySelector("#balance");
const btn_limpar = document.querySelector("#btn_limpar");
let input = document.querySelectorAll("input")

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;        
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {        
        evt.preventDefault();
        return false;
    } else {        
        return true;
    }
}
const handleFormSubmit = event => {
    event.preventDefault()
    isNumber(event)
    const distance = distanceDisplay.value.trim();
    const amount = amountDisplay.value.trim();
    const consumption = consumptionDisplay.value.trim();
    const isSomeInputEmpty = (distance === '' || amount === '' || consumption ==='' )
    
    if(isSomeInputEmpty){
        balanceDisplay.innerHTML =`R$ 0.00`
        return  
    }
    const total = distance * amount / consumption
    balanceDisplay.innerHTML =`R$ ${total.toFixed(2)}`
}

input.forEach(item => {
    item.addEventListener('keyup', handleFormSubmit)
}) 

btn_limpar.addEventListener('submit', (event)=> {
    event.preventDefault();    
})