function topla(a,b,c,d) {
    return a+b+c+d;
}

function cikar(a,b) {
    return a-b;
}

function carp(a,b) {
    return a*b;
}

function bol(a,b) {
    return a/b;
}

// ULAŞIM

document.getElementById('ulaşım1').onchange = function(){
    var ulaşım1 =  document.getElementById('ulaşım1').value;
    console.log(ulaşım1);
}

document.getElementById('ulaşım2').onchange = function(){
    var ulaşım2 =  document.getElementById('ulaşım2').value;
    console.log(ulaşım2);
}

document.getElementById('ulaşım3').onchange = function(){
    var ulaşım3 =  document.getElementById('ulaşım3').value;
    console.log(ulaşım3);
}

document.getElementById('ulaşım4').onchange = function(){
    var ulaşım4 =  document.getElementById('ulaşım4').value;
    console.log(ulaşım4);
}

topla(beslenme1,beslenme,2)