var slideIndex = 1;
showSlides(slideIndex);

// function for prev, next
function chuyen(n) {
	showSlides(slideIndex += n);
}

// function for dots
function currentSlide(n) {
	showSlides(slideIndex = n);
}

// function for showSlides
function showSlides(n) {
	var slides = $('.slide');
	var dots = $('.dot');

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (var i =0; i < slides.length; i++ ) {
		slides[i].style.display = "none";
	}
	for (var i =0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";

}
