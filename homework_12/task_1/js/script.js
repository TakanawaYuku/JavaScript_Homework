let text = localStorage.getItem('task1-home-work');
const editor = document.getElementById('editor');
const clearText = document.getElementById('clear_text');

if (text){
	editor.textContent = text;
}

editor.addEventListener('keyup', event => {
	localStorage.setItem('task1-home-work', editor.value);
});

clearText.addEventListener('click', event => {
	editor.value = '';
	localStorage.setItem('task1-home-work', '');
});
