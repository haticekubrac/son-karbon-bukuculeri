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