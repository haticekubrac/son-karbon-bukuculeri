// ATIK

function sum(a, b, c) {
    return a + b + c;
  }

function updateVariables() {
    for (var i = 0; i < values.length; i++) {
      values[i] = parseInt(localStorage.getItem('atık' + (i + 1))) || 0;
    }
  
    atıkSonuc = sum(values[0], values[1], values[2]);
    localStorage.setItem('atıkDeger', atıkSonuc);
    console.log(localStorage.getItem('atıkDeger'));
  }
  
  var atık1, atık2, atık3, atıkSonuc, atıkDeger;
  var values = [atık1, atık2, atık3];
  
  document.getElementById('atık1').onchange = function () {
    localStorage.setItem('atık1', document.getElementById('atık1').value);
    console.log(localStorage.getItem('atık1'));
    updateVariables();
  };
  
  document.getElementById('atık2').onchange = function () {
    localStorage.setItem('atık2', document.getElementById('atık2').value);
    console.log(localStorage.getItem('atık2'));
    updateVariables();
  };
  
  document.getElementById('atık3').onchange = function () {
    localStorage.setItem('atık3', document.getElementById('atık3').value);
    console.log(localStorage.getItem('atık3'));
    updateVariables();
  };
  
  updateVariables();

function updateTextInput(val) {
  document.getElementById('textInput').value=val;
}

var mojis = ['🤯','😩','🙁','😑','😐','🙂','😃','😄','😁','😎','🤩'];

// 1. question

var range1 = document.querySelector('#atık1');
var div1 = document.querySelector('#atmoji1');

range1.addEventListener('input', (e) => {
  let rangeValue1 = e.target.value;
  div1.textContent = mojis[rangeValue1];
});

// 2. question

var range2 = document.querySelector('#atık2');
var div2 = document.querySelector('#atmoji2');

range2.addEventListener('input', (e) => {
  let rangeValue2 = e.target.value;
  div2.textContent = mojis[rangeValue2];
});

// 3. question

var range3 = document.querySelector('#atık3');
var div3 = document.querySelector('#atmoji3');

range3.addEventListener('input', (e) => {
  let rangeValue3 = e.target.value;
  div3.textContent = mojis[rangeValue3];
});