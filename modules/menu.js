const btnList = document.querySelectorAll('.js-enable-autoscale');
btnList.forEach((btn) => {
	btn.addEventListener('click', function() {
		btn.classList.toggle('active');
		const container = btn.closest('.container');
		if (btn.classList.contains('active')) {
			btn.textContent = 'autoscale activated';
			const containerWidth = container.clientWidth;
			const scaledValue = window.innerWidth / containerWidth;
			let containerFontSize = window.getComputedStyle(container).fontSize;
			containerFontSize = parseInt(containerFontSize, 10);
			container.style.fontSize = `${scaledValue * containerFontSize}px`;
			container.classList.add('container-fluid');
		} else {
			btn.textContent = 'autoscale disabled';
			container.classList.remove('container-fluid');
			container.style.fontSize = '';
		}
	});
});