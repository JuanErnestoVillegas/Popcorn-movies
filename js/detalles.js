/*
class Pelicula {
    constructor (titulo, imagen, logo, genero, año, duracion, elenco, sinopsis) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.logo = logo;
        this.genero = genero;
        this.año = año;
        this.duracion = duracion;
        this.elenco = elenco;
        this.sinopsis = sinopsis;
    }
}


let harryPotter = new Pelicula  (
    titulo = "Harry Potter",
    imagen = 
    genero = " Fantasia",
    año = " 2011",
    duracion = " 2 hs 34 min",
    elenco = " Daniel Raadcliffe, Rupert Grint, Emma Watson, Ralph Fiennes, Maggie Smith, Michael Gambon, Alan Rickman, Helena Bonham Carter, Robbie Coltrane.",
    sinopsis = "El final ha llegado. Harry, Hermione y Ron tendrán que recuperar la espada de Gryffindor para encontrar y destruir los últimos horrocruxes. Mientras tanto, Lord Voldemort está a punto de apoderarse por completo de Hogwarts y de conseguir su objetivo: matar a Harry Potter. La única esperanza de Harry es encontrar los horrocruxes antes de que Voldemort lo encuentre a él. Buscando pistas, descubre una antigua y olvidada historia: la leyenda de las reliquias de la muerte, que podría dar al malvado Lord el poder definitivo. Pero el futuro de Harry está escrito desde que nació e incluye una misión para la que se ha estado preparando desde que llegó a Hogwarts: la batalla final contra Voldemort.",
)
*/

let id = window.location.hash.slice (1);
let films = JSON.parse(localStorage.getItem ("films"));
let pelicula = films.find (film => film.id == id);


let peliculaDetalles = document.getElementById ('contenido');
/*
<video controls autoplay>
            <source src="assets/videos/1917_Trim.mp4" type="video/mp4">                
            Your browser does not support the video tag.
            </video> ';"
*/

peliculaDetalles.innerHTML = `
    <div id="portadaPeli">
        <img src=${pelicula.image2} alt="portada de la pelicula" class="w-100" height="550px">
    </div>
    <div class="container">
        <div class="encimaImagen">
            <button type="button" class="btn btn-light me-4 my-4" >
                <i class="fas fa-play me-2"></i>                 
                Reproducir
            </button>
            <button type="button" class="btn btn-dark rounded-circle me-3">
                <i class="fas fa-plus"></i>
            </button>
            <button type="button" class="btn btn-dark rounded-circle me-3">
                <i class="far fa-thumbs-up"></i>
            </button>
            <button type="button" class="btn btn-dark rounded-circle me-3">
                <i class="far fa-thumbs-down"></i>
            </button>
        </div>
        <div class="my-4 text-secondary">
            <div class="row fs-5">
            <h3 class="text-light mb-4">${pelicula.name}</h3>
                <div class="col-sm-12 col-md-6">
                    <p><strong class="text-light">Genero:</strong>${pelicula.genre}</p>
                    <p><strong class="text-light">Año de salida:</strong>${pelicula.year}</p>
                    <p><strong class="text-light">Categoria:</strong>${pelicula.categorie}</p>
                </div>
                <div class="col-sm-12 col-md-6">
                    <p><strong class="text-light">Elenco:</strong>${pelicula.actors}</p>
                    <p><strong class="text-light">Director:</strong>${pelicula.director}</p>
                    
                </div>
            </div>
            <hr>
            <div class="text-center">
                <h3 class="mb-5">Sinopsis</h3>
                <h5>${pelicula.sinopsis}</h5>
            </div>
        </div>
    </div>
</div>
`

