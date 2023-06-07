// ENERJİ

function sum(a, b, c) {
    return a + b + c;
  }

function updateVariables() {
    for (var i = 0; i < values.length; i++) {
      values[i] = parseInt(localStorage.getItem('enerji' + (i + 1))) || 0;
    }
  
    enerjiSonuc = sum(values[0], values[1], values[2]);
    localStorage.setItem('enerjiDeger', enerjiSonuc);
    console.log(localStorage.getItem('enerjiDeger'));
  }
  
  var enerji1, enerji2, enerji3, enerjiSonuc, enerjiDeger;
  var values = [enerji1, enerji2, enerji3];
  
  document.getElementById('enerji1').onchange = function () {
    localStorage.setItem('enerji1', document.getElementById('enerji1').value);
    console.log(localStorage.getItem('enerji1'));
    updateVariables();
  };
  
  document.getElementById('enerji2').onchange = function () {
    localStorage.setItem('enerji2', document.getElementById('enerji2').value);
    console.log(localStorage.getItem('enerji2'));
    updateVariables();
  };
  
  document.getElementById('enerji3').onchange = function () {
    localStorage.setItem('enerji3', document.getElementById('enerji3').value);
    console.log(localStorage.getItem('enerji3'));
    updateVariables();
  };
  
  updateVariables();

function updateTextInput(val) {
  document.getElementById('textInput').value=val;
}

var mojis = ['🤯','😩','🙁','😑','😐','🙂','😃','😄','😁','😎','🤩'];

// 1. question

var range1 = document.querySelector('#enerji1');
var div1 = document.querySelector('#enmoji1');

range1.addEventListener('input', (e) => {
  let rangeValue1 = e.target.value;
  div1.textContent = mojis[rangeValue1];
});

// 2. question

var range2 = document.querySelector('#enerji2');
var div2 = document.querySelector('#enmoji2');

range2.addEventListener('input', (e) => {
  let rangeValue2 = e.target.value;
  div2.textContent = mojis[rangeValue2];
});

// 3. question

var range3 = document.querySelector('#enerji3');
var div3 = document.querySelector('#enmoji3');

range3.addEventListener('input', (e) => {
  let rangeValue3 = e.target.value;
  div3.textContent = mojis[rangeValue3];
});