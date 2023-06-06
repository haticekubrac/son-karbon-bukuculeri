// BESLENME

function sum(a, b, c, d) {
    return a + b + c + d;
  }

function updateVariables() {
    for (var i = 0; i < values.length; i++) {
      values[i] = parseInt(localStorage.getItem('beslenme' + (i + 1))) || 0;
    }
  
    beslenmeSonuc = sum(values[0], values[1], values[2], values[3]);
    console.log(beslenmeSonuc);
  }
  
  var beslenme1, beslenme2, beslenme3, beslenme4, beslenmeSonuc;
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
