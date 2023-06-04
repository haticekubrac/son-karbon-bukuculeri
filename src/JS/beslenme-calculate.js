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

/* 
değer al
katsayı oluştur
değerleri kendi içinde topla // kesin değil
değerleri topla
değerlere uygun sonuç */

// BESLENME

var beslenme1, beslenme2, beslenme3, beslenme4, beslenmeSonuc;

document.getElementById('beslenme1').onchange = function(){
    localStorage.setItem(beslenme1, document.getElementById('beslenme1').value);
    console.log(localStorage.getItem(beslenme1));
}

document.getElementById('beslenme2').onchange = function(){
    localStorage.setItem(beslenme2, document.getElementById('beslenme2').value);
    console.log(localStorage.getItem(beslenme2));
}

document.getElementById('beslenme3').onchange = function(){
    localStorage.setItem(beslenme3, document.getElementById('beslenme3').value);
    console.log(localStorage.getItem(beslenme3));
}

document.getElementById('beslenme4').onchange = function(){
    localStorage.setItem(beslenme4, document.getElementById('beslenme4').value);
    console.log(localStorage.getItem(beslenme4));
}

localStorage.setItem(beslenmeSonuc,eval((localStorage.getItem(beslenme1)) + (localStorage.getItem(beslenme2)) + (localStorage.getItem(beslenme3)) + (localStorage.getItem(beslenme4))));
// beslenmeSonuc = eval((localStorage.getItem(beslenme1)) + (localStorage.getItem(beslenme2)) + (localStorage.getItem(beslenme3)) + (localStorage.getItem(beslenme4)));
console.log(localStorage.getItem(beslenmeSonuc));
// localStorage.getItem(beslenme1);
console.log(localStorage.getItem(beslenme1));



