const containerBox = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector(".main-content");
const selector = document.getElementById("select");
console.log(selector);

init();

selector.addEventListener('change', (event) => {
  let categoriaSelezionata = event.target.value;
	init(categoriaSelezionata);
});

// FUNZIONE CHE CI PERMETTE DI VEDERE GLI ARRAY FILTRATI
	function init(categoriaSelezionata){

		if (categoriaSelezionata == 4){
			const user = containerBox.filter((element) => element.type == 'user');
			console.log(user);
			createBox(user);
		} else if(categoriaSelezionata == 3){
			const vegetable = containerBox.filter((element) => element.type == 'vegetable');
			console.log(vegetable);
			createBox(vegetable);
		}else if(categoriaSelezionata == 2){
			const animal = containerBox.filter((element) => element.type == 'animal');
			console.log(animal);
			createBox(animal);
		}else{
			createBox(containerBox);
		}

	}

// CREIAMO LE BOX NELL'HTML
function createBox(object){
	// SVUOTO L'HTML OGNI VOLTA CHE SELEZIONO UNA CATEGORIA
	container.innerHTML = " ";
	object.forEach(element => {
		const name = element.name.toUpperCase();
		container.innerHTML += 
		`
			<div class="box d-flex justify-content-center align-items-center flex-column clearfix col-2 shadow p-3 mb-5 bg-body rounded">
				<i class="${element.family} ${element.prefix}${element.name} ${element.color} block"></i>
				<span>${name}</span> 
			</div>
		`; 
	});
}

