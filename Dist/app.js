const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links a');

	burger.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('active');

		// Burger Animation
		burger.classList.toggle('toggle');
	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			// Close Nav
			nav.classList.remove('active');

			// Reset Burger
			burger.classList.remove('toggle');
		});
	});
}

navSlide();
