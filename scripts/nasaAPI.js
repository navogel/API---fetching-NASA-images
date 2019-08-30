console.log("yo, duh");

// "name": "Ravioli",
// "category": "pasta",
// "ethnicity": "italian",
// "id": 6,
// "restaurantId": 2

// fetch("http://localhost:8088/food")
// 	.then(foods => foods.json())
// 	.then(parsedFoods => {
// 		console.table(parsedFoods);
// 	});

// function createNasaHTML(nasaObj) {
// 	let nasaHTML = `
// 	<section>
// 		<h3>Title: ${nasaObj.title}</h3>
// 		<h3>Date: ${nasaObj.date}</h3>
//         <h3>Copyright Info: ${nasaObj.copyright}</h3>
//         <img style="height: 500px;" src=${nasaObj.url}>
// 		<p>Info: ${nasaObj.explanation}</p>

//     </section>
//     `;

// 	return nasaHTML;
// }

// let nasaEl = document.querySelector(".NASA");

// function addNasatoDom(dogs) {
// 	nasaEl.innerHTML = dogs;
// }

// fetch(
// 	"https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx"
// )
// 	.then(nasa => nasa.json())
// 	.then(parsedNASA => {
// 		console.table(parsedNASA);
// 		console.log(parsedNASA);
// 		const NasaAsHTML = createNasaHTML(parsedNASA);
// 		addNasatoDom(NasaAsHTML);
// 	});
