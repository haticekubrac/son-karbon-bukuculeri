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
