function genarateBtn(){
  document.getElementById('pin-num-input').value = getPin();
}
function getPin(){
  const pin = Math.round((Math.random()) * 10000);
  const pinString = pin + '';
  if(pinString.length == 4){
    return pin;
  }else{
    console.log('got' , pin)
    return getPin();
  }
}

document.getElementById('calc-body').addEventListener('click',function(e){
  const pinNum = e.target.innerText;
  const displayPin = document.getElementById('display-pin');
  if(isNaN(pinNum)){
    if(pinNum == 'C'){
      displayPin.value = '';
    }else if(pinNum == '&lt'){
      const previousDisplayPin = displayPin.value;
    const newDisplayPin = previousDisplayPin - pinNum;
    }
  }else{
    const previousDisplayPin = displayPin.value;
    const newDisplayPin = previousDisplayPin + pinNum;
    displayPin.value = newDisplayPin;
  }
})

function verify(){
  const pin = document.getElementById('pin-num-input').value;
  const display = document.getElementById('display-pin').value;
  const fail = document.getElementById('notify-fail');
  const success = document.getElementById('notify-success');
  if(pin == display){
    success.style.display = 'block';
    fail.style.display = 'none';
  }else{
    success.style.display = 'none';
    fail.style.display = 'block';
  }
}