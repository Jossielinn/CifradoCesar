window.cipher = {
  encode:(offset,string)=>{
    offset = parseInt(offset);
    let finalEncode = "";
    for(let i=0; i<string.length;i++){
     let codeAscii = string.charCodeAt(i);
 
     if (codeAscii>=65 && codeAscii<=122){
       newLetter = String.fromCharCode((codeAscii-65+ offset)%26 + 65);
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
     offset = parseInt(offset);
     let finalDecode = "";
     for(let i=0; i<string.length;i++){
      let codeAscii = string.charCodeAt(i);
  
      if (codeAscii>=65 && codeAscii<=122){
        newLetter = String.fromCharCode((codeAscii-65- offset)%26 + 65);
        finalDecode += newLetter; //finalDecode = finalEncode+newLetter
      }
      else if (codeAscii>=97 && codeAscii<=122){
        newLetter = String.fromCharCode((codeAscii-97-offset)%26+97);
        finalDecode += newLetter; 
      }
      else {
        newLetter = String.fromCharCode(codeAscii);
        finalDecode += newLetter;
      }
     }
     return finalDecode;
   }
 };
