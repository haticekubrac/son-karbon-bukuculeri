// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
    };


var isim = document.getElementById('isim').value;

function submit(e) {
  e.preventDefault()  
  window.location.href = "index.html"

  const isim = document.getElementById('isim').value
  console.log(isim)
}



var randomColor = "";
var characters = "0123456789abcdef";

for (let i = 0; i < 6; i++) {
  randomColor += characters[Math.floor(Math.random() * 16)];
}
