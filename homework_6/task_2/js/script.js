const modalElem = document.getElementById('modal_main');
const goodModalElem = document.getElementById('modal_success');

const oldClassName = modalElem.className;
modalElem.className += " modal_active";

const modalCloseClass = Array.from(document.getElementsByClassName('modal__close'));

modalCloseClass.forEach(elem => {
		elem.onclick = () => {
			modalElem.className = oldClassName;
			goodModalElem.className = oldClassName;
		}

		if (elem.className.includes('show-success')==true){
			elem.onclick = () => {
				modalElem.className = oldClassName;
				goodModalElem.className += " modal_active";
			}
		}
});
