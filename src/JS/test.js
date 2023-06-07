function updateTextInput(val) {
    document.getElementById('textInput').value=val;
  }


var range = document.querySelector('.testSorusu');
var div = document.querySelector('.moji');
var mojis = ['🤯','😩','🙁','😑','😐','🙂','😃','😄','😁','😎','🤩'];

range.addEventListener('input', (e) => {
  let rangeValue = e.target.value;
  div.textContent = mojis[rangeValue];
});


/*
var tags = ['#beslenme1', '#beslenme2', '#beslenme3', '#beslenme4', 
'#ulaşım1', '#ulaşım2', '#ulaşım3', '#ulaşım4','#enerji1', 
'#enerji2', '#enerji3', '#atık1', '#atık2' , '#atık3'];
var rangeDeger, rangeValue;
var div = document.querySelector('.moji'); 
var mojis = ['🤯','😩','🙁','😑','😐','🙂','😃','😄','😁','😎','🤩'];

for (var i = 0; i < tags.length ; i++) {
  rangeDeger = document.querySelector(tags[i])

  rangeDeger.addEventListener('input', (e) => { 
    rangeValue = e.target.value; 
    div.textContent = mojis[rangeValue]; 
})
}
*/