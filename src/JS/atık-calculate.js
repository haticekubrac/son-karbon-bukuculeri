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