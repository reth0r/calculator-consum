
var form = document.getElementById("myForm");
var inputField = document.getElementById("inputField");
var inputField2 = document.getElementById("inputField2");
var inputField3 = document.getElementById("inputField3");
var txt1 = document.getElementById('displayArea1');
var txt2 = document.getElementById('displayArea2');
var txt3 = document.getElementById('displayArea3');
var checkBox = document.getElementById('check');


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var consum = inputField.value;
    var distanta = inputField2.value;
    var pretCombustibil = inputField3.value;

    
    /*console.log("consum: " + consum);
    console.log("distanta: " + distanta);
    console.log("pret: " + pretCombustibil); */



    const x = function calculConsum() {
      return  ((consum * distanta) / 100) * pretCombustibil + " Lei";
      
      }
      
      const y = function calculLitri () {
        return ((consum * distanta) / 100) 
      }
      
      const retur = parseInt(x()) * 2 + " Lei"
      console.log (x())
      console.log (y())
      console.log (retur)      

function txtBox () {
  if (checkBox.checked) {
  txt1.innerHTML = "Cost calatorie: " + retur;
  txt2.innerHTML = "Litri consumati: " + y();
  //txt3.innerHTML = "Retur: " + retur;
  } else { 
    txt1.innerHTML = "Cost calatorie: " + x();
    txt2.innerHTML = "Litri consumati: " + y();

  }
} 

const btn = document.getElementById('btn1')
btn1.addEventListener ('click', txtBox())


//

    // activare reset
   //form.reset();

});