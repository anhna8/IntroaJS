const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear') {
            display.innerText = '';
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        } else if (display.innerText !== '' && item.id === 'equal') {
            display.innerText = eval(display.innerText); // Evalúa la expresión matemática
        } else {
            display.innerText += item.id;
        }
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.theme-toggler');
    const calculator = document.querySelector('.calculatorDark'); 

    if (!themeToggleBtn || !calculator) {
        console.error("Error: No se encontró '.theme-toggler' o '.calculatorDark'");
        return;
    }

    themeToggleBtn.addEventListener('click', () => {
        console.log("Botón toggle presionado");
        calculator.classList.toggle('dark'); 
    });
});




