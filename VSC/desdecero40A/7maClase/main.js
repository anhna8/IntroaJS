//1. Seleccionamos el elemento
const btn = document.querySelector('.main-content button');


//3. Definimos que queremos que haga cuando se ejecuta el evento
const handleButton = () => {
    const imageContainer = document.querySelector('.image-container');
    const image = imageContainer.children[0];
    if(image){
        image.remove();
    } else{
        const newImage = document.createElement('img');
        newImage.src = 'https://th.bing.com/th/id/OIP.pUUYPTvx355gY4N3WPG3_QHaE7?rs=1&pid=ImgDetMain';
        newImage.alt = 'bien';
        imageContainer.appendChild(newImage);
    }
}


const suma =(a, b) => a + b;


//2. agregamos su event listener
btn.addEventListener('click', () => handleButton());

console.log(suma(5,10));
