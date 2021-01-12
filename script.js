//bring panels into JS files
const panels = document.querySelectorAll('.panel');

//loop over the panels
panels.forEach((panel) => {
	// console.log(panel);
	panel.addEventListener('click', () => {
		// console.log(123);

		//remove active classes
		removeActiveClasses();
		//add class to panel every click
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	//loop over panels

	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
