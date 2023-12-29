const form = document.getElementById("myForm");
const inputField = document.getElementById("inputField");
const inputField2 = document.getElementById("inputField2");
const inputField3 = document.getElementById("inputField3");
const txt1 = document.getElementById("displayArea1");
const txt2 = document.getElementById("displayArea2");
const txt3 = document.getElementById("displayArea3");
const checkBox = document.getElementById("check");
const btn = document.getElementById("btn1");
const btnReset = document.getElementById("btnReset");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let consum = inputField.value;
  let distanta = inputField2.value;
  let pretCombustibil = inputField3.value;

  const fCalculConsum = function () {
    return (((consum * distanta) / 100) * pretCombustibil).toFixed(2) + " Lei";
  };

  const fCalculLitri = function () {
    return ((consum * distanta) / 100).toFixed(2);
  };

  const retur = parseInt(fCalculConsum()) * 2 + " Lei";

  function txtBox() {
    if (checkBox.checked) {
      txt1.innerHTML = "Cost calatorie: " + retur;
      txt2.innerHTML = "Litri consumati: " + fCalculLitri() * 2;
    } else {
      txt1.innerHTML = "Cost calatorie: " + fCalculConsum();
      txt2.innerHTML = "Litri consumati: " + fCalculLitri();
    }
  }

  btn.addEventListener("click", txtBox());

  //

  // actilete reset
  //form.reset();
});

btnReset.addEventListener("click", function () {
  form.reset();
});
