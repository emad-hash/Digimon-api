function Digimon(image, level, name) {
	this.image = image;
	this.level = level;
	this.name = name;
}
let digimonArr = [];
fetch("https://digimon-api.vercel.app/api/digimon")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		for (let i = 0; i < 20; i++) {
			let newDigimon = new Digimon(data[i].img, data[i].level, data[i].name);
			digimonArr.push(newDigimon);
		}
		console.log(digimonArr);

		digimonArr.map(render);
		// render(data);
	});

let cardContainer = document.getElementById("main");

function render(digimonArr) {
	let card = document.createElement("section");
	cardContainer.append(card);

	let img = document.createElement("img");
	img.setAttribute("src", digimonArr.image);
	card.append(img);

	let nameH2 = document.createElement("h2");
	nameH2.textContent =  digimonArr.name;
	card.append(nameH2);

	let p = document.createElement("p");
	p.textContent = "level: " + digimonArr.level;
	card.append(p);
}



