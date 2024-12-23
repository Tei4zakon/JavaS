let globalNum = 10
console.log(globalNum) 
//odgovor => 10

//function checkScope () {
  //  let localNum = 10
//}
//console.log(globalNum === localNum)
//odgovor => ReferenceError: localNum is not defined

if(true){
    let blockNum = 10;
    }
console.log(typeof blockNum)    
//odgovor => undefined