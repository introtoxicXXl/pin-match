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

