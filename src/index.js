
let string = document.getElementById("textDeposit");
let offset = document.getElementById("textValuefixed");

//Se aplica un evento para cada boton
let btnEncode=document.getElementById("buttonEncode");
btnEncode.addEventListener("click",function() {
document.getElementById("resultEncode").innerHTML= window.cipher.encode(offset.value,string.value);
})

let btnDecode=document.getElementById("buttonDecode");
btnDecode.addEventListener("click",function() {
document.getElementById("resultDecode").innerHTML= window.cipher.decode(offset.value,string.value);
})
