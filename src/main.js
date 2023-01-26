// Creamos una instancia de axios
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        "Content-Type": "application/json;charset=utf-8",
    },
    params: {
        "api_key": API_KEY,
    },   
}); 

async function getTrendingMoviesPreview() {
    // const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY);
    // const data = await res.json();
    
    const { data } = await api("trending/movie/day");
    const movies = data.results;
    // console.log({data,movies});
    
    movies.forEach(movie => {

        // Seleccionamos el secction contenedor(padre) por #ID y y al article
        // contenedor (hijo) por .CLASE donde lo inyectaremos con un appen
        const trendingPreviewMoviesContainer = document.querySelector
        ("#trendingPreview .trendingPreview-movieList");

        // Creamos etiquetas Html y le inyectamos las clases
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");

        // Le agregamos un atributo (tipo de atributo, volor del atributo) titulo
        movieImg.setAttribute("alt", movie.title);

        // Le agregamos un atributo (tipo de atributo, volor del atributo) imagen
        movieImg.setAttribute(
            "src", "https://image.tmdb.org/t/p/w500/" + movie.poster_path
            );

        // Inyectamos a movieImg al contenedor movieContainer (Agremamos la img)
        movieContainer.appendChild(movieImg);

        // Inyectamos movieContainer(div) al contenedor 
        // trendingPreviewMoviesContainer(article)
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
    
}

async function getCategoriesPreview() {
    // const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY);
    // const data = await res.json();

    const { data } = await api("genre/movie/list");
    const categories = data.genres;
    console.log({data,categories});
    
    categories.forEach(category => {

        // Seleccionamos el secction contenedor(padre) por #ID y y al article
        // contenedor (hijo) por .CLASE donde lo inyectaremos con un appen
        const previewCategoriesContainer = document.querySelector
        ("#categoriesPreview .categoriesPreview-list");

        // Creamos etiquetas Html y le inyectamos las clases
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");

        // Le agregamos un atributo (tipo de atributo, volor del atributo) 
        categoryTitle.setAttribute("id","id" + category.id);

        // Creamos un text con el nombre que viene de la peticion 200
        const categoryTitleText = document.createTextNode(category.name)

        // Inyectamos a categoryTitleText al contenedor categoryTitle (Agregamos el nombre)
        categoryTitle.appendChild(categoryTitleText);

        // Inyectamos a categoryTitle al contenedor categoryContainer(text al div)
        categoryContainer.appendChild(categoryTitle);

        // Inyectamos el div al contenedor padre
        previewCategoriesContainer.appendChild(categoryContainer);
        
    });
    
}

getTrendingMoviesPreview();
getCategoriesPreview();