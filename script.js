/* Contador de productos */
let contadorProducto = 0;
const contador = document.querySelector('.container-shopping-card .number');
const addToCartButtons = document.querySelectorAll('.add-card');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        contadorProducto++;
        contador.textContent = `(${contadorProducto})`;
    });
});

/* Mostrar mensaje */
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        contadorProducto++;
        contador.textContent = `(${contadorProducto})`;

        alert('¡Se ha agregado producto a tu carrito de compras!');
    });
});


/* Blog mas reciente */
const blogs = document.querySelectorAll('.card-blog');
let mostRecentBlog = null;
let latestDate = new Date(0); 

blogs.forEach(blog => {
    const dateText = blog.querySelector('.content-blog span').textContent;
    const blogDate = new Date(dateText.split('/').reverse().join('/')); 

    if (blogDate > latestDate) {
        latestDate = blogDate;
        mostRecentBlog = blog;
    }
});

if (mostRecentBlog) {
    mostRecentBlog.classList.add('highlight');
}


const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        border: 2px solid #ffd0d7;
        border-radius: 20px;
        box-shadow: 0 0 15px rgba(255, 102, 0, 0.5);
    }
`;
document.head.appendChild(style);


