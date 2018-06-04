window.cipher = {
  encode:(offset,string)=>{
    let finalEncode = "";
    let newLetter = "";
    let numberJump = parseInt(offset);
    for(let i=0; i<string.length;i++){ //for(let i of string){ }
     let codeAscii = string.charCodeAt(i);
 
     if (codeAscii>=65 && codeAscii<=90){
       newLetter = String.fromCharCode((codeAscii-65+ numberJump)%26 + 65);
       finalEncode += newLetter; //finalEncode = finalEncode+newLetter
     }
     else if (codeAscii>=97 && codeAscii<=122){
       newLetter = String.fromCharCode((codeAscii-97+numberJump)%26+97);
       finalEncode += newLetter; 
     }
     else {
       newLetter = String.fromCharCode(codeAscii);
       finalEncode += newLetter;
     }
    }
    return finalEncode;
  },
 
   decode:(offset,string) => {
     let finalDecode = "";
     //let decodeBox="";
     let newLetter = "";
     let numberJump = parseInt(offset);
     for(let i=0; i<string.length; i++){
      let codeAscii = string.charCodeAt(i);
      
      if (codeAscii>=65 && codeAscii<=90){
        newLetter = String.fromCharCode((codeAscii-90-numberJump)%26 + 90);
        finalDecode += newLetter; //finalDecode = finalDecode+newLetter
      }
      else if (codeAscii>=97 && codeAscii<=122){
        newLetter = String.fromCharCode((codeAscii-122-numberJump)%26 + 122);
        finalDecode += newLetter; 
      }
      else {
        newLetter = String.fromCharCode(codeAscii);
        finalDecode += newLetter;
      }
     }
     return finalDecode;
   },

   createCipherWithOffset(offset) {
    let resultObjet = {
      encode:(string) => cipher.encode(offset, string),

      decode:(string) => cipher.decode(offset, string)
    }
    return resultObjet;
  }

 };
