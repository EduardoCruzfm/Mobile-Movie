searchFormBtn.addEventListener("click", ()=> {
    location.hash = "#search=";
});

trendingBtn.addEventListener("click", ()=> {
    location.hash = "#trends"
});

arrowBtn.addEventListener("click", ()=> {
    location.hash = "#home"
});


// Cual es la funcion que queremos ejecutar cada ves que cambie el hash
window.addEventListener("load", navigator, false);
window.addEventListener("hashchange", navigator, false);



function navigator() {
    console.log( {location} );
    
    if(location.hash.startsWith("#trends")) {
        trendsPage();
    }else if(location.hash.startsWith("#search=")) {
        searchPage();
    }else if(location.hash.startsWith("#movie=")) {
        movieDetailsPage();
    }else if(location.hash.startsWith("#category=")) {
        categiriesPage();
    }else {
        homePage();
    }
    
}

function homePage() {
    console.log("Home!!");//inicio

    headerSection.classList.remove("header-container--long");//Ocultamos background img
    headerSection.style.background = "";//Limpiamos el header
    arrowBtn.classList.add("inactive");//Ocultamos el bnt <
    headerTitle.classList.remove("inactive");//Mostramos el titulo de la app
    headerCategoryTitle.classList.add("inactive");//Ocultamos el titulo de categoria (ej:Acción)
    searchForm.classList.remove("inactive");//Mostamos el buscador

    trendingPreviewSection.classList.remove("inactive");//Mostramos tendencias de peliculas
    categoriesPreviewSection.classList.remove("inactive");//Mostramos categorias
    genericSection.classList.add("inactive");//Ocultamos resultados de busqueda
    movieDetailSection.classList.add("inactive");//Ocultamos detalles de la pelicula

    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categiriesPage() {
    console.log("Categiries!!");//resultado de busqueda

    headerSection.classList.remove("header-container--long");//Ocultamos background img
    headerSection.style.background = "";//Limpiamos el header
    arrowBtn.classList.remove("inactive");//Mostramos el bnt <
    headerTitle.classList.add("inactive");//Ocultamos el titulo de la app
    headerCategoryTitle.classList.remove("inactive");//Mostramos el titulo de categoria (ej:Acción)
    searchForm.classList.add("inactive");//Ocultamos el buscador

    trendingPreviewSection.classList.add("inactive");//Ocultamos tendencias de peliculas
    categoriesPreviewSection.classList.add("inactive");//Ocultamos categorias
    genericSection.classList.remove("inactive");//Mostramos resultados de busqueda
    movieDetailSection.classList.add("inactive");//Ocultamos detalles de la pelicula
}

function movieDetailsPage() {
    console.log("Movies!!");//Detalles de la pelicula

    headerSection.classList.add("header-container--long");//Mostramos background img
    // headerSection.style.background = "";//Limpiamos el header
    arrowBtn.classList.remove("inactive");//Mostramos el bnt <
    // arrowBtn.classList.add("header-arrow--white");//fecha de otro color
    headerTitle.classList.add("inactive");//Ocultamos el titulo de la app
    headerCategoryTitle.classList.add("inactive");//Ocultamos el titulo de categoria (ej:Acción)
    searchForm.classList.add("inactive");//Ocultamos el buscador

    trendingPreviewSection.classList.add("inactive");//Ocultamos tendencias de peliculas
    categoriesPreviewSection.classList.add("inactive");//Ocultamos categorias
    genericSection.classList.add("inactive");//Ocultamos resultados de busqueda
    movieDetailSection.classList.remove("inactive");//Mostramos detalles de la pelicula
}

function searchPage() {
    console.log("Search!!");//Busqueda

    headerSection.classList.remove("header-container--long");//Ocultamos background img
    headerSection.style.background = "";//Limpiamos el header
    arrowBtn.classList.remove("inactive");//Mostramos el bnt <
    // arrowBtn.classList.add("header-arrow--white");//fecha de otro color
    headerTitle.classList.add("inactive");//Ocultamos el titulo de la app
    headerCategoryTitle.classList.remove("inactive");//Mostramos el titulo de categoria (ej:Acción)
    searchForm.classList.remove("inactive");//Mostramos el buscador

    trendingPreviewSection.classList.add("inactive");//Ocultamos tendencias de peliculas
    categoriesPreviewSection.classList.add("inactive");//Ocultamos categorias
    genericSection.classList.remove("inactive");//Mostramos resultados de busqueda
    movieDetailSection.classList.add("inactive");//Ocultamos detalles de la pelicula
}

function trendsPage() {
    console.log("TRENDS!!");//Tendencias

    headerSection.classList.remove("header-container--long");//Ocultamos background img
    headerSection.style.background = "";//Limpiamos el header
    arrowBtn.classList.remove("inactive");//Mostramos el bnt <
    // arrowBtn.classList.add("header-arrow--white");//fecha de otro color
    headerTitle.classList.add("inactive");//Ocultamos el titulo de la app
    headerCategoryTitle.classList.remove("inactive");//Mostramos el titulo de categoria (ej:Acción)
    searchForm.classList.add("inactive");//Ocultamos el buscador

    trendingPreviewSection.classList.add("inactive");//Ocultamos tendencias de peliculas
    categoriesPreviewSection.classList.add("inactive");//Ocultamos categorias
    genericSection.classList.remove("inactive");//Mostramos resultados de busqueda
    movieDetailSection.classList.add("inactive");//Ocultamos detalles de la pelicula
}