import { TITLES_BY_TYPES } from "../constants/constants.js";

const headDefaults = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<link rel="stylesheet" href="../../index.css">`;

function createErrorPage(error) {
    let html = "";
    html += 
    `<head>
    ${headDefaults}
    <title>Sailor's Coffee | Error</title>
    </head>`;
    html += `<body class="d-flex flex-column h-100">`;
    html += `<main class="flex-shrink-0">`;
    html += 
    `<section class="d-flex flex-column gap-3 justify-content-center mx-auto text-center py-5">
        <h2 class="rafginsFont">Se produjo un error</h2>
        <h3>${error}</h3>
        <div class="py-2 px-3 rounded-pill mx-auto" style="background-color: #E1D7D0;">
            <a class="text-dark text-decoration-none" href="/">Volver al Inicio</a>
        </div>
    </section>`;
    html += `</body>`;
    html += `</main>`;
    html += `<footer class="d-flex justify-content-around align-items-center text-center footer mt-auto py-3" style="background-color: #E1D7D0;">`
    html +=
    `<div class="col-4">
        <p class="m-0">Aplicaciones Híbridas | Gacía, Agüero, Stella</p>
    </div>
    <div class="col-4">
        <h2 class="rafginsFont m-0">Sailor's Coffee</h2>
    </div>
    <div class="d-flex justify-content-center col-4 gap-5">
        <a href="https://www.whatsapp.com/"><img src="../images/wsp.png" alt="Logo de WhatsApp"></a>
        <a href="https://www.instagram.com/"><img src="../images/ig.png" alt="Logo de Instagram"></a>
    </div>`;
    html += `</footer>`;
    return html;
}

function createProductsListPage(products, type) {
    let html = "";
    html += 
    `<head>
    ${headDefaults}
    <title>Sailor's Coffee | ${type ? TITLES_BY_TYPES.find((item) => item.type === type).type.toLocaleUpperCase() : 'Productos'}</title>
    </head>`;
    html += `<body class="d-flex flex-column h-100">`;
    html += `<main class="flex-shrink-0">`;
    html += `<section id="intro-section" class="pb-5">`;
    html += 
    `<nav class="mx-auto d-flex justify-content-between col-10 align-items-center py-4">
        <div>
            <h1 class="rafginsFont fs-3 m-0"><a href="/" class="text-light text-decoration-none">Sailor's Coffee</a></h1>
        </div>
        <div>
            <ul class="d-flex gap-5 m-0 list-unstyled">
                <li><a href="/" class="text-light text-decoration-none">Inicio</a></li>
                <li><a href="/productos" class="text-light text-decoration-none">Catálogo Completo</a></li>
                <li><a href="/productos/type/cafes" class="text-light text-decoration-none">Cafés</a></li>
                <li><a href="/productos/type/milkshakes" class="text-light text-decoration-none">Milkshakes</a></li>
                <li><a href="/productos/type/tortas" class="text-light text-decoration-none">Tortas</a></li>
                <li><a href="/productos/type/cookies" class="text-light text-decoration-none">Cookies</a></li>
                <li><a href="/productos/type/bebidas" class="text-light text-decoration-none">Bebidas</a></li>
            </ul>
        </div>
    </nav>`;
    html += 
    `<section class="d-flex flex-column justify-content-center text-center text-light py-5">
        <h2 class="rafginsFont" style="font-size: 5rem;">${type ? TITLES_BY_TYPES.find((item) => item.type === type).title : 'Nuestros Productos'}</h2>
        <div class="w-75 my-4 mx-auto">
            <p>${type ? TITLES_BY_TYPES.find((item) => item.type === type).description : `En Sailor's Coffee, te invitamos a sumergirte en un mundo de sabores y opciones. Nuestra sección con todos los productos es el lugar perfecto para comenzar tu viaje culinario por nuestra tienda.`}</p>
        </div>
        <a href="#" class="d-inline-block px-4 py-1 mx-auto text-light text-decoration-none fs-5 border border-1 border-light rounded-5">Productos Destacados</a>
    </section>`;
    html += `</section>`;
    html += `<section class="d-flex flex-wrap gap-3 justify-content-center py-5">`;
    products.forEach(product => {
    html += 
        `<div class="card border-0" style="width: 19rem">
            <img class="card-img-top" src="/images/products/${product.image}" alt="">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">${product.name}</h5>
                    <p>$${product.price}</p>
                </div>
                <p>${product.description}</p>
                <p>${product.size}</p>
            </div>
            <div class="d-flex flex-column gap-2 justify-content-center">
                <a class="w-100 py-1 text-dark rounded-5 text-center text-decoration-none mx-auto" style="background-color: #E1D7D0;" href="/productos/${product._id}">Ver Más Detalles</a>
                <a class="bg-danger w-100 py-1 text-light rounded-5 text-center text-decoration-none mx-auto" href="/productos/eliminar/${product._id}">Eliminar Producto</a>
                <a class="bg-secondary w-100 py-1 text-light rounded-5 text-center text-decoration-none mx-auto" href="/productos/editar/${product._id}">Editar Producto</a>
            </div>
        </div>`
    });
    html += 
    `<div class="d-flex align-items-center justify-content-center" style="width: 19rem;">
        <div class="d-flex rounded-circle align-items-center justify-content-center" style="background-color: #E1D7D0; width: 5rem; height: 5rem;">
            <a class="fs-1 text-dark text-decoration-none" href="/productos/nuevo">+</a>
        </div>
    </div>`;
    html += `</section>`;
    html += `</main>`;
    html += `<footer class="d-flex justify-content-around align-items-center text-center footer mt-auto py-3" style="background-color: #E1D7D0;">`
    html +=
    `<div class="col-4">
        <p class="m-0">Aplicaciones Híbridas | Gacía, Agüero, Stella</p>
    </div>
    <div class="col-4">
        <h2 class="rafginsFont m-0">Sailor's Coffee</h2>
    </div>
    <div class="d-flex justify-content-center col-4 gap-5">`;
    if (type != undefined) {
        html += `<a href="https://www.whatsapp.com/"><img src="../../images/wsp.png" alt="Logo de WhatsApp"></a>`;
        html += `<a href="https://www.instagram.com/"><img src="../../images/ig.png" alt="Logo de Instagram"></a>`;
    } else {
        html += `<a href="https://www.whatsapp.com/"><img src="../images/wsp.png" alt="Logo de WhatsApp"></a>`;
        html += `<a href="https://www.instagram.com/"><img src="../images/ig.png" alt="Logo de Instagram"></a>`;
    };
    html += `</div>`;
    html += `</footer>`;
    html += `</body>`;
    return html;
};

function createDetailedPage(product) {
    let html = "";
    html += 
    `<head>
    ${headDefaults}
    <title>Sailor's Coffee | ${product.name}</title>
    </head>`;
    html += `<body class="d-flex flex-column h-100">`;
    html += `<main class="flex-shrink-0">`;
    html += `<section class="mb-5" style="background-color: #E1D7D0;">`;
    html += 
    `<nav class="mx-auto d-flex justify-content-between col-10 align-items-center py-4">
        <div>
            <h1 class="rafginsFont fs-3 m-0"><a href="/" class="text-dark text-decoration-none">Sailor's Coffee</a></h1>
        </div>
        <div>
            <ul class="d-flex gap-5 m-0 list-unstyled">
                <li><a href="/" class="text-dark text-decoration-none">Inicio</a></li>
                <li><a href="/productos" class="text-dark text-decoration-none">Catálogo Completo</a></li>
                <li><a href="/productos/type/cafes" class="text-dark text-decoration-none">Cafés</a></li>
                <li><a href="/productos/type/milkshakes" class="text-dark text-decoration-none">Milkshakes</a></li>
                <li><a href="/productos/type/tortas" class="text-dark text-decoration-none">Tortas</a></li>
                <li><a href="/productos/type/cookies" class="text-dark text-decoration-none">Cookies</a></li>
                <li><a href="/productos/type/bebidas" class="text-dark text-decoration-none">Bebidas</a></li>
            </ul>
        </div>
    </nav>`;
    html += `</section>`;
    if(product) {
    html += `<section class="d-flex justify-content-between align-items-center col-10 mx-auto">`;
    html += 
    `<div class="col-5 text-center">
        <img class="rounded-circle" src="/images/products/${product.image}" alt="Foto del producto ${product.name}" width="320">
    </div>
    <div class="col-7 text-start">
        <h2 class="rafginsFont fs-1">${product.name}</h2>
        <p class="fs-5">${product.description}</p>
        <p class="fs-5">${product.size}</p>
        <div>
            <b class="fs-4">$${product.price}</b>
        </div>
    </div>`;
    html += `</section>`;
    } else {
    html += `<section class="d-flex justify-content-between align-items-center col-10 mx-auto">`;
    html += `<h2>Producto no encontrado</h2>`;
    html += `</section>`;
    };
    html += `</main>`;
    html += `<footer class="d-flex justify-content-around align-items-center text-center footer mt-auto py-3" style="background-color: #E1D7D0;">`
    html +=
    `<div class="col-4">
        <p class="m-0">Aplicaciones Híbridas | Gacía, Agüero, Stella</p>
    </div>
    <div class="col-4">
        <h2 class="rafginsFont m-0">Sailor's Coffee</h2>
    </div>
    <div class="d-flex justify-content-center col-4 gap-5">
        <a href="https://www.whatsapp.com/"><img src="../images/wsp.png" alt="Logo de WhatsApp"></a>
        <a href="https://www.instagram.com/"><img src="../images/ig.png" alt="Logo de Instagram"></a>
    </div>`;
    html += `</footer>`;
    html += `</body>`;
    return html;
}

function createForm() {
    let html = "";
    html += 
    `<head>
    ${headDefaults}
    <title>Sailor's Coffee | Crear Producto</title>
    </head>`;
    html += `<body class="d-flex flex-column h-100">`;
    html += `<main class="flex-shrink-0">`;
    html += `<section class="mb-5" style="background-color: #E1D7D0;">`;
    html += 
    `<nav class="mx-auto d-flex justify-content-between col-10 align-items-center py-4">
        <div>
            <h1 class="rafginsFont fs-3 m-0"><a href="/" class="text-dark text-decoration-none">Sailor's Coffee</a></h1>
        </div>
        <div>
            <ul class="d-flex gap-5 m-0 list-unstyled">
                <li><a href="/" class="text-dark text-decoration-none">Inicio</a></li>
                <li><a href="/productos" class="text-dark text-decoration-none">Catálogo Completo</a></li>
                <li><a href="/productos/type/cafes" class="text-dark text-decoration-none">Cafés</a></li>
                <li><a href="/productos/type/milkshakes" class="text-dark text-decoration-none">Milkshakes</a></li>
                <li><a href="/productos/type/tortas" class="text-dark text-decoration-none">Tortas</a></li>
                <li><a href="/productos/type/cookies" class="text-dark text-decoration-none">Cookies</a></li>
                <li><a href="/productos/type/bebidas" class="text-dark text-decoration-none">Bebidas</a></li>
            </ul>
        </div>
    </nav>`;
    html += `</section>`;
    html += 
    `<section class="d-flex flex-column justift-content-center mx-auto col-10">
        <h2 class="rafginsFont text-center mb-4">Crear un Nuevo Producto</h2>
        <form action="/productos/nuevo" method="POST" class="d-flex flex-column col-6 mx-auto">
            <input class="form-control" type="text" id="name" name="name" placeholder="Nombre" required><br>

            <input class="form-control" type="text" id="description" name="description" placeholder="Descripción" required><br>

            <input class="form-control" type="number" id="price" name="price" placeholder="Precio" required><br>

            <input class="form-control" type="text" id="image" name="image" placeholder="Imágen" required><br>

            <select class="form-control" id="size" name="size">
                <option selected disabled>Tamaño</option>
                <option value="chico">Chico</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
            </select><br>

            <select class="form-control" id="type" name="type">
                <option selected disabled>Tipo</option>
                <option value="cafes">Cafés</option>
                <option value="tortas">Tortas</option>
                <option value="milkshakes">Milkshakes</option>
                <option value="bebidas">Bebidas</option>
                <option value="cookies">Cookies</option>
            </select><br>

            <div class="d-flex align-items-center gap-2 mx-3">
            <label for="outstanding">Destacado:</label>
                <input style="width: 1.2rem; height: 1.2rem;" type="checkbox" id="outstanding" name="outstanding" value="true">
                <input type="hidden" name="outstanding" value="false">
            </div>


            <button class="btn my-3" type="submit" style="background-color: #E1D7D0;">Crear</button>
        </form>
    </section>`;
    html += `</main>`;
    html += `<footer class="d-flex justify-content-around align-items-center text-center footer mt-auto py-3" style="background-color: #E1D7D0;">`
    html +=
    `<div class="col-4">
        <p class="m-0">Aplicaciones Híbridas | Gacía, Agüero, Stella</p>
    </div>
    <div class="col-4">
        <h2 class="rafginsFont m-0">Sailor's Coffee</h2>
    </div>
    <div class="d-flex justify-content-center col-4 gap-5">
        <a href="https://www.whatsapp.com/"><img src="../images/wsp.png" alt="Logo de WhatsApp"></a>
        <a href="https://www.instagram.com/"><img src="../images/ig.png" alt="Logo de Instagram"></a>
    </div>`;
    html += `</footer>`;
    html += `</body>`;
    return html;
}

function editForm(product) {
    let html = "";
    html += 
    `<head>
    ${headDefaults}
    <title>Sailor's Coffee | Editar Producto</title>
    </head>`;
    html += `<body class="d-flex flex-column h-100">`;
    html += `<main class="flex-shrink-0">`;
    html += `<section class="mb-5" style="background-color: #E1D7D0;">`;
    html += 
    `<nav class="mx-auto d-flex justify-content-between col-10 align-items-center py-4">
        <div>
            <h1 class="rafginsFont fs-3 m-0"><a href="/" class="text-dark text-decoration-none">Sailor's Coffee</a></h1>
        </div>
        <div>
            <ul class="d-flex gap-5 m-0 list-unstyled">
                <li><a href="/" class="text-dark text-decoration-none">Inicio</a></li>
                <li><a href="/productos" class="text-dark text-decoration-none">Catálogo Completo</a></li>
                <li><a href="/productos/type/cafes" class="text-dark text-decoration-none">Cafés</a></li>
                <li><a href="/productos/type/milkshakes" class="text-dark text-decoration-none">Milkshakes</a></li>
                <li><a href="/productos/type/tortas" class="text-dark text-decoration-none">Tortas</a></li>
                <li><a href="/productos/type/cookies" class="text-dark text-decoration-none">Cookies</a></li>
                <li><a href="/productos/type/bebidas" class="text-dark text-decoration-none">Bebidas</a></li>
            </ul>
        </div>
    </nav>`;
    html += `</section>`;
    html += 
    `<section class="d-flex flex-column justift-content-center mx-auto col-10">
        <h2 class="rafginsFont text-center mb-4">Editar un Producto</h2>
        <form action="/productos/editar/${product._id}" method="POST" class="d-flex flex-column col-6 mx-auto">
            <input class="form-control" type="text" id="name" name="name" placeholder="Nombre" value="${product.name}"><br>

            <input class="form-control" type="text" id="description" name="description" placeholder="Descripción" value="${product.description}"><br>

            <input class="form-control" type="number" id="price" name="price" placeholder="Precio" value="${product.price}"><br>

            <input class="form-control" type="text" id="image" name="image" placeholder="Imágen" value="${product.image}"><br>

            <select class="form-control" id="size" name="size">
                <option selected value="${product.size}">Tamaño</option>
                <option value="chico">Chico</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
            </select><br>

            <select class="form-control" id="type" name="type">
                <option selected value="${product.type}">Tipo</option>
                <option value="cafes">Cafés</option>
                <option value="tortas">Tortas</option>
                <option value="milkshakes">Milkshakes</option>
                <option value="bebidas">Bebidas</option>
                <option value="cookies">Cookies</option>
            </select><br>

            <div class="d-flex align-items-center gap-2 mx-3">
            <label for="outstanding">Destacado:</label>
                <input style="width: 1.2rem; height: 1.2rem;" type="checkbox" id="outstanding" name="outstanding" value="true">
                <input type="hidden" name="outstanding" value="false">
            </div>


            <button class="btn my-3" type="submit" style="background-color: #E1D7D0;">Editar</button>
        </form>
    </section>`;
    html += `</main>`;
    html += `<footer class="d-flex justify-content-around align-items-center text-center footer mt-auto py-3" style="background-color: #E1D7D0;">`
    html +=
    `<div class="col-4">
        <p class="m-0">Aplicaciones Híbridas | Gacía, Agüero, Stella</p>
    </div>
    <div class="col-4">
        <h2 class="rafginsFont m-0">Sailor's Coffee</h2>
    </div>
    <div class="d-flex justify-content-center col-4 gap-5">
        <a href="https://www.whatsapp.com/"><img src="../../images/wsp.png" alt="Logo de WhatsApp"></a>
        <a href="https://www.instagram.com/"><img src="../../images/ig.png" alt="Logo de Instagram"></a>
    </div>`;
    html += `</footer>`;
    html += `</body>`;
    return html;
}

function deleteForm(product) {
    let html = "";
    html += 
    `<head>
    ${headDefaults}
    <title>Sailor's Coffee | Editar Producto</title>
    </head>`;
    html += `<body class="d-flex flex-column h-100">`;
    html += `<main class="flex-shrink-0">`;
    html += `<section class="mb-5" style="background-color: #E1D7D0;">`;
    html += 
    `<nav class="mx-auto d-flex justify-content-between col-10 align-items-center py-4">
        <div>
            <h1 class="rafginsFont fs-3 m-0"><a href="/" class="text-dark text-decoration-none">Sailor's Coffee</a></h1>
        </div>
        <div>
            <ul class="d-flex gap-5 m-0 list-unstyled">
                <li><a href="/" class="text-dark text-decoration-none">Inicio</a></li>
                <li><a href="/productos" class="text-dark text-decoration-none">Catálogo Completo</a></li>
                <li><a href="/productos/type/cafes" class="text-dark text-decoration-none">Cafés</a></li>
                <li><a href="/productos/type/milkshakes" class="text-dark text-decoration-none">Milkshakes</a></li>
                <li><a href="/productos/type/tortas" class="text-dark text-decoration-none">Tortas</a></li>
                <li><a href="/productos/type/cookies" class="text-dark text-decoration-none">Cookies</a></li>
                <li><a href="/productos/type/bebidas" class="text-dark text-decoration-none">Bebidas</a></li>
            </ul>
        </div>
    </nav>`;
    html += `</section>`;
    html += `<section class="d-flex flex-column justift-content-center mx-auto col-10">`
    html += `<h2 class="rafginsFont text-center mb-4">Eliminar un Producto</h2>`
    html += `<form action="/productos/eliminar/${product._id}" method="POST" class="d-flex flex-column col-12 mx-auto">`
    html += `<section class="d-flex justify-content-between align-items-center col-12 mx-auto">`;
    html += 
    `<div class="col-5 text-center">
        <img class="rounded-circle" src="/images/products/${product.image}" alt="Foto del producto ${product.name}" width="320">
    </div>
    <div class="col-7 text-start">
        <h2 class="fs-1">${product.name}</h2>
        <p class="fs-5">${product.description}</p>
        <p class="fs-5">${product.size}</p>
        <div class="d-flex justify-content-between align-items-center">
            <b class="fs-4">$${product.price}</b>
            <button class="btn my-3 bg-danger text-light px-5" type="submit">Eliminar</button>
        </div>
    </div>`;
    html += `</section>`;
    html += `</form>`;
    html += `</section>`;
    html += `</main>`;
    html += `<footer class="d-flex justify-content-around align-items-center text-center footer mt-auto py-3" style="background-color: #E1D7D0;">`
    html +=
    `<div class="col-4">
        <p class="m-0">Aplicaciones Híbridas | Gacía, Agüero, Stella</p>
    </div>
    <div class="col-4">
        <h2 class="rafginsFont m-0">Sailor's Coffee</h2>
    </div>
    <div class="d-flex justify-content-center col-4 gap-5">
        <a href="https://www.whatsapp.com/"><img src="../../images/wsp.png" alt="Logo de WhatsApp"></a>
        <a href="https://www.instagram.com/"><img src="../../images/ig.png" alt="Logo de Instagram"></a>
    </div>`;
    html += `</footer>`;
    html += `</body>`;
    return html;
}

export { createErrorPage, createProductsListPage, createDetailedPage, createForm, editForm, deleteForm };