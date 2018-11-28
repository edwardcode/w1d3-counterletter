//object =[key:value]




function counterLetter(sentence){
  var object={};
  var letterSplitted = sentence.split('')


//console.log(letterSplited);
for (i=0; i<letterSplitted.length;i++){

  if (  object[letterSplitted[i] ]  === undefined){

   object[letterSplitted[i]]= 1
   } else {
    object[letterSplitted[i]]+= 1
   }

  }
  return object

}




console.log(counterLetter('lighthouse in the house'))
