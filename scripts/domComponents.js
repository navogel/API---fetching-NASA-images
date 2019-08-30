function createNasaHTML(nasaObj) {
	let nasaHTML = `
	<section>
		<h3>Title: ${nasaObj.title}</h3>
		<h3>Date: ${nasaObj.date}</h3>
        <h3>Copyright Info: ${nasaObj.copyright}</h3>
        <img style="height: 500px;" src=${nasaObj.url}>
		<p>Info: ${nasaObj.explanation}</p>
		
    </section>
    `;

	return nasaHTML;
}
