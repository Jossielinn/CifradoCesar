
let string = document.getElementById("textDeposit");
let offset = document.getElementById("textValuefixed");

//Se aplica un metodo interno para cada boton
let btnEncode=document.getElementById("buttonEncode");
btnEncode.addEventListener("click",() => { 
    document.getElementById("resultCipher").value = window.cipher.encode(offset.value,string.value);
})

let btnDecode=document.getElementById("buttonDecode");
btnDecode.addEventListener("click",() => {
    document.getElementById("resultCipher").value = window.cipher.decode(offset.value,string.value);   

})
