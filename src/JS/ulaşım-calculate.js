// ULAŞIM

function sum(a, b, c, d) {
    return a + b + c + d;
  }

function updateVariables() {
    for (var i = 0; i < values.length; i++) {
      values[i] = parseInt(localStorage.getItem('ulaşım' + (i + 1))) || 0;
    }
  
    ulaşımSonuc = sum(values[0], values[1], values[2], values[3]);
    localStorage.setItem('ulaşımDeger', ulaşımSonuc);
    console.log(localStorage.getItem('ulaşımDeger'));
  }
  
  var ulaşım1, ulaşım2, ulaşım3, ulaşım4, ulaşımSonuc, ulaşımDeger;
  var values = [ulaşım1, ulaşım2, ulaşım3, ulaşım4];
  
  document.getElementById('ulaşım1').onchange = function () {
    localStorage.setItem('ulaşım1', document.getElementById('ulaşım1').value);
    console.log(localStorage.getItem('ulaşım1'));
    updateVariables();
  };
  
  document.getElementById('ulaşım2').onchange = function () {
    localStorage.setItem('ulaşım2', document.getElementById('ulaşım2').value);
    console.log(localStorage.getItem('ulaşım2'));
    updateVariables();
  };
  
  document.getElementById('ulaşım3').onchange = function () {
    localStorage.setItem('ulaşım3', document.getElementById('ulaşım3').value);
    console.log(localStorage.getItem('ulaşım3'));
    updateVariables();
  };
  
  document.getElementById('ulaşım4').onchange = function () {
    localStorage.setItem('ulaşım4', document.getElementById('ulaşım4').value);
    console.log(localStorage.getItem('ulaşım4'));
    updateVariables();
  };
  
  updateVariables();

function updateTextInput(val) {
  document.getElementById('textInput').value=val;
}

var mojis = ['🤯','😩','🙁','😑','😐','🙂','😃','😄','😁','😎','🤩'];

// 1. question

var range1 = document.querySelector('#ulaşım1');
var div1 = document.querySelector('#ulmoji1');

range1.addEventListener('input', (e) => {
  let rangeValue1 = e.target.value;
  div1.textContent = mojis[rangeValue1];
});

// 2. question

var range2 = document.querySelector('#ulaşım2');
var div2 = document.querySelector('#ulmoji2');

range2.addEventListener('input', (e) => {
  let rangeValue2 = e.target.value;
  div2.textContent = mojis[rangeValue2];
});

// 3. question

var range3 = document.querySelector('#ulaşım3');
var div3 = document.querySelector('#ulmoji3');

range3.addEventListener('input', (e) => {
  let rangeValue3 = e.target.value;
  div3.textContent = mojis[rangeValue3];
});

// 4. question

var range4 = document.querySelector('#ulaşım4');
var div4 = document.querySelector('#ulmoji4');

range4.addEventListener('input', (e) => {
  let rangeValue4 = e.target.value;
  div4.textContent = mojis[rangeValue4];
});