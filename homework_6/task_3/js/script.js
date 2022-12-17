const slides = Array.from(document.getElementsByClassName('slider__item'));
const totalSlides = slides.length;
let currentSlide = 0;

const dots = Array.from(document.getElementsByClassName('slider__dot'));


function clearSlides(){
	slides.forEach(elem => {
			elem.className = 'slider__item';
	});
	dots.forEach(elem => {
			elem.className = 'slider__dot';
	});
}

function setActiveSlide(cs){
	clearSlides();
	slides[cs].className = 'slider__item slider__item_active';
	dots[cs].className = 'slider__dot slider__dot_active';
}

const leftArrow = Array.from(document.getElementsByClassName('slider__arrow slider__arrow_prev'));
leftArrow[0].onclick = () => {
	if (currentSlide == 0)
	{
		currentSlide = totalSlides-1;
	}
	else
	{
		currentSlide = currentSlide - 1;
	}
	setActiveSlide(currentSlide);
}

const rightArrow = Array.from(document.getElementsByClassName('slider__arrow slider__arrow_next'));
rightArrow[0].onclick = () => {
	if (currentSlide == totalSlides-1)
	{
		currentSlide = 0;
	}
	else
	{
		currentSlide = currentSlide + 1;
	}
	setActiveSlide(currentSlide);
}

dots.forEach((elem, index) => {
	elem.onclick = () => {
		currentSlide = index;
		setActiveSlide(currentSlide);
	}
});

setActiveSlide(currentSlide);
