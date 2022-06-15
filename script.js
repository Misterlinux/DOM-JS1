var filone = []
var filona = []

//I cant declare textnode before the .createTextnode
//now, we can use document.deletechild to handle better .js created tags but
//here we just extract the composited HTML by textnote 
//to get a random with 2 digits coz teh random gives you 0.XX random
function rando() {

  var propt = document.getElementById("primo")
  propt.innerHTML = ""
  var sec = document.getElementById("secondo")
  sec.innerHTML = ""

  var oul = Math.floor( Math.random()*100 ) ;
  var pro = Math.floor( Math.random()*100 ) ;

  filone[filone.length] = oul;
  filona[filona.length] = pro;

  var textnode = document.createTextNode(oul);
  document.getElementById("primo").appendChild(textnode);

  var secondo = document.createTextNode(pro);
  document.getElementById("secondo").appendChild(secondo);

}

function summin(){
  var ter = document.getElementById("terzi")
  ter.innerHTML = ""

  var erm = filone[filone.length-1] + filona[filona.length-1];

  const terzo = document.createTextNode(erm);
  document.getElementById("terzi").appendChild(terzo);

}

function rigato(){

  var coll = document.getElementById("colla1")
  coll.innerHTML = ""
  var cols = document.getElementById("colla2")
  cols.innerHTML = ""

  var riga = document.createTextNode("[ " + filone + " ]");
  document.getElementById("colla1").appendChild(riga);

  var riga1 = document.createTextNode("[ " + filona + " ]");
  document.getElementById("colla2").appendChild(riga1);

}

console.log(filone, filona)
