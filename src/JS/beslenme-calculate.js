// BESLENME

function sum(a, b, c, d) {
    return a + b + c + d;
  }

function updateVariables() {
    for (var i = 0; i < values.length; i++) {
      values[i] = parseInt(localStorage.getItem('beslenme' + (i + 1))) || 0;
    }
  
    beslenmeSonuc = sum(values[0], values[1], values[2], values[3]);
    localStorage.setItem('beslenmeDeger', beslenmeSonuc);
    console.log(localStorage.getItem('beslenmeDeger'));
  }

var beslenme1, beslenme2, beslenme3, beslenme4, beslenmeSonuc, beslenmeDeger;
var values = [beslenme1, beslenme2, beslenme3, beslenme4];

document.getElementById('beslenme1').onchange = function () {
  localStorage.setItem('beslenme1', document.getElementById('beslenme1').value);
  console.log(localStorage.getItem('beslenme1'));
  updateVariables();
};

document.getElementById('beslenme2').onchange = function () {
  localStorage.setItem('beslenme2', document.getElementById('beslenme2').value);
  console.log(localStorage.getItem('beslenme2'));
  updateVariables();
};

document.getElementById('beslenme3').onchange = function () {
  localStorage.setItem('beslenme3', document.getElementById('beslenme3').value);
  console.log(localStorage.getItem('beslenme3'));
  updateVariables();
};

document.getElementById('beslenme4').onchange = function () {
  localStorage.setItem('beslenme4', document.getElementById('beslenme4').value);
  console.log(localStorage.getItem('beslenme4'));
  updateVariables();
};

updateVariables();

function updateTextInput(val) {
  document.getElementById('textInput').value=val;
}

var mojis = ['🤯','😩','🙁','😑','😐','🙂','😃','😄','😁','😎','🤩'];

// 1. question

var range1 = document.querySelector('#beslenme1');
var div1 = document.querySelector('#besmoji1');

range1.addEventListener('input', (e) => {
  let rangeValue1 = e.target.value;
  div1.textContent = mojis[rangeValue1];
});

// 2. question

var range2 = document.querySelector('#beslenme2');
var div2 = document.querySelector('#besmoji2');

range2.addEventListener('input', (e) => {
  let rangeValue2 = e.target.value;
  div2.textContent = mojis[rangeValue2];
});

// 3. question

var range3 = document.querySelector('#beslenme3');
var div3 = document.querySelector('#besmoji3');

range3.addEventListener('input', (e) => {
  let rangeValue3 = e.target.value;
  div3.textContent = mojis[rangeValue3];
});

// 4. question

var range4 = document.querySelector('#beslenme4');
var div4 = document.querySelector('#besmoji4');

range4.addEventListener('input', (e) => {
  let rangeValue4 = e.target.value;
  div4.textContent = mojis[rangeValue4];
});
