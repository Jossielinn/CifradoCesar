window.cipher = {
 // ...encode:(offset,string)=>{}
  //decode:(offset,string)=>{}
};
let cipherCaesar = function(){
 let x=document.getElementById("textDeposit").value;
 let numberJump=parseInt(document.getElementById("textValuefixed").value);
 let finalEncode="";
   
 for (i=0;i<x.length;i++) {  
  a=x.charCodeAt(i);  
  console.log(x.length);
  if (a>=65 && a<=90){ 
    out=String.fromCharCode((a-65+numberJump)%26+65);
    finalEncode=finalEncode+out;
  }
  else if (a>=97 && a<=122) { 
    out=String.fromCharCode((a-97+numberJump)%26+97);
    finalEncode=finalEncode+out;
   }
  else {
    out=String.fromCharCode(a);
    finalEncode=finalEncode+out;
  }
    document.getElementById("showResult").value=finalEncode;
  }
}

let decodeCaesar = function(){
  let x=document.getElementById("showResult").value;
  let numberJump=parseInt(document.getElementById("textValuefixed").value);
  let finalDecode="";
  for (i=0;i<x.length;i++) {  
    a=x.charCodeAt(i);  
    console.log(x.length);
    
    if (a>=65 && a<=90){ 
      decodeBox=a-numberJump;

      if (decodeBox<65){
        out=String.fromCharCode(90-(65-decodeBox-1));
      } else{
        out=String.fromCharCode(decodeBox);
      }
      finalDecode=finalDecode+out;
    }
    else if (a>=97 && a<=122) {

      decodeBox=a-numberJump;

      if (decodeBox<97){
        out=String.fromCharCode(122-(97-decodeBox-1));
      } else{
        out=String.fromCharCode(decodeBox);
      }
      finalDecode=finalDecode+out;
     } else {
      out=String.fromCharCode(a);
      finalDecode=finalDecode+out;
     }

      document.getElementById("showResultDecode").value=finalDecode;
    }
  }