
document.querySelector('#parentDiv').addEventListener('click', function(){
    alert('elemento pai foi chamado');
});


document.querySelector('#itemList').addEventListener('click', function(event){
    alert('voce clicou em: ' + event.target.innerHTML);
    	
event.stopPropagation();
});

const newText = document.querySelector('#newText');
const button = document.querySelector('#changeButton');
const displayText = document.querySelector('#displayText');

button.addEventListener('click', function(){
    displayText.textContent = newText.value;
});