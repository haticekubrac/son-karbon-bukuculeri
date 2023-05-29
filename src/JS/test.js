function updateTextInput(val) {
    document.getElementById('textInput').value=val;
  }








var range = document.querySelector('#beslenme1');
var div = document.querySelector('.moji');
var mojis = ['😄','🙂','😐','😑','☹️','😩','😠','😡','🤢','😤','💩'];

range.addEventListener('input', (e) => {
  let rangeValue = e.target.value;
  div.textContent = mojis[rangeValue];
});