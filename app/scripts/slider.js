export default sliderClass => {
	// Add EventListeners to slider
	const slidersAddEvents = slider => {
		let mousedown = false;
		// Get slider's first knob
		const knob = slider.getElementsByClassName(sliderClass + '__knob')[0];

		// Knob move to X, not safe
		const knobPosition = x => {
			knob.style.transition = 'left 0.1s';
			knob.style.left = x;
		};

		const knobMoveByClick = event => {
			if (mousedown && event.target === slider) {
				knobPosition(`${event.offsetX / (slider.clientWidth / 100)}%`);
			}
		};

		const knobMoveByMove = event => {
			if (mousedown && event.target === slider) {
				knob.style.left = (`${knob.offsetLeft + 6 + event.movementX}px`);
			}
		};

		// Add EventListeners to Knob
		slider.addEventListener('mousedown', event => {
			mousedown = true;
			knobMoveByClick(event);
		}, false);
		slider.addEventListener('mousemove', event => knobMoveByMove(event), false);
		document.addEventListener('mouseup', () => {mousedown = false;});
		knob.addEventListener('transitionend', () => {knob.style.transition = 'none';});

		// Add EventListeners to Labels
		[...slider.getElementsByClassName(sliderClass + '__label')]
			.forEach(sliderLabel => sliderLabel
				.addEventListener('click', event =>
					knobPosition(`${event.target.getAttribute('data-value')}%`)
					), false);
	};

	// Handle all sliders
	const slidersHandle = () =>
		[...document.getElementsByClassName(sliderClass)]
			.forEach(slider => slidersAddEvents(slider));

	// Init!
	slidersHandle();
};
// knob select from many in slidersHandle
