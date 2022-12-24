const reveal = Array.from(document.getElementsByClassName('reveal'));

document.addEventListener('scroll', (e) => {
	reveal.forEach(elem => {
		const {top, bottom} = elem.getBoundingClientRect();
		if ((bottom <= window.innerHeight) && (top > 0)) {
			elem.classList.add('reveal_active');
		}
		else
		{
			elem.classList.remove('reveal_active');
		}
	});
});
