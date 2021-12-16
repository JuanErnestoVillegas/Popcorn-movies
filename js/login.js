
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}   

class User {
	constructor(name, lastname, email, password, admin) {
	this.name = name;
	this.lastname = lastname;
	this.email = email;
	this.password = password;
	this.admin = admin;
	}
}

let users = [
	new User('Admin','Popcorn Movies','ad.popcorn.movies2021@gmail.com','12345678', true),
	new User('juan','portillo','juanpablo.portillo2@gmail.com','12345678', false),
	new User('Juan Ernesto','Villegas','jevillegas_123@hotmail,com','12345678', false),

]

//Usuarios a LocalStorage
let usersDb;
let usersLS=JSON.stringify(users)
localStorage.setItem('usersDb',usersLS)
let usuarios = JSON.parse(localStorage.getItem ("users"));

// async function getUsuarios() {
// 	const URL = 'http://localhost:3000/usuarios'
//     const response = await fetch(URL)
//     const data = await response.json()
// 	if(!localStorage.getItem(data)){
// 	// let userJSON = JSON.stringify(usuarios);
// 	localStorage.setItem("user", data);
// 	}
//     return data
// }

// async function getUsuarios() {
// 	const URL = 'http://localhost:3000/usuarios'
//     const response = await fetch(URL)
//     const data = await response.json()
//     return data
// }

// getUsuarios();

// if(!localStorage.getItem("usuarios")){
// 	let userJSON = JSON.stringify(usuarios);
// 	localStorage.setItem("usuarios", userJSON);
// }


function loginCheck(event) {
	event.preventDefault();
	
	let email = document.querySelector('#email').value;
	let pass = document.querySelector('#pass').value;
	let userLogged = users.find(User=>User.email == email);
	if(userLogged && userLogged.password == pass){
		window.location.assign('index.html');
	}else {
		let dataError = document.createElement('div');
		dataError.innerText='Los datos ingresados no son correctos';
		dataError.classList.add('alert','alert-danger','mt-3', 'text-center')
		let form = document.querySelector('#login');
		form.appendChild(dataError);
		setTimeout(function(){
			form.removeChild(dataError);
		}, 5000)
	}
}
