window.cipher = {
  encode:(offset,string)=>{
    let finalEncode = "";
    let newLetter = "";
    let numberJump = parseInt(offset);
    for(let i=0; i<string.length;i++){
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
     let decodeBox="";
     let newLetter = "";
     let numberJump = parseInt(offset);
     for(let i=0; i<string.length; i++){
      let codeAscii = string.charCodeAt(i);
  
      if (codeAscii>=65 && codeAscii<=90){
        decodeBox=(codeAscii - numberJump % 26);

        if (decodeBox<65){
          decodeBox += 26; //decodeBox = decodeBox + 26;
        }
        newLetter=String.fromCharCode(decodeBox);
        finalDecode += newLetter;
      }
      else if (codeAscii>=97 && codeAscii<=122){
        decodeBox = (codeAscii - numberJump % 26);

        if(decodeBox<97){
          decodeBox +=26; //decodeBox = decodeBox + 26;
        }
        newLetter=String.fromCharCode(decodeBox);
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
