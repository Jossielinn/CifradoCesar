import { encode } from "punycode";

var x = document.getElementById("textIngresar");
var y = parseInt(document.getElementById("textValuefixed"));
//Se aplica un evento para cada boton
var btnEncode=document.getElementById("buttonEncode");
btnEncode.addEventListener("click",encode);
var btnDecode=document.getElementById("buttonDecode");
btnDecode.addEventListener("click",decode);