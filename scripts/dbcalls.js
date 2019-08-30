function getPicture() {
	fetch(
		"https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx"
	)
		.then(nasa => nasa.json())
		.then(parsedNASA => {
			console.table(parsedNASA);
			console.log(parsedNASA);
			const NasaAsHTML = createNasaHTML(parsedNASA);
			addNasatoDom(NasaAsHTML);
		});
}
