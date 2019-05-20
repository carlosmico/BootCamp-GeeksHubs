document.addEventListener('DOMContentLoaded', () => {
    console.log('Ya he cargado el DOM');

    let counter = 0;

    //Añade el código HTML en la clase .Counter !Sobreescribe el HTML actual!
    document.querySelector('.Counter span').innerHTML = counter;

    let btIncrement = document.createElement('button');
    btIncrement.innerText = '+';
    btIncrement.className = "increment";

    btIncrement.addEventListener('click', event => {
        counter++;
        document.querySelector('.Counter span').innerHTML = counter;
    });

    let btDecrement = document.createElement('button');
    btDecrement.innerText = "-";

    btDecrement.addEventListener('click', () => {
        if ((counter - 1) !== -1) {
            counter--;
            document.querySelector('.Counter span').innerHTML = counter;
        } else {
            alert('Los negativos no molan.');
        }
    });

    document.querySelector('.Counter').appendChild(btIncrement);
    document.querySelector('.Counter').appendChild(btDecrement);

    let body = document.querySelector('body');

    // body.addEventListener('click', () => {
    //     //Devuelve un entero random entre 1 y 3 ambos incluidos
    //     let random = Math.round(Math.random() * (3 - 1) + 1);

    //     switch (random) {
    //         case 1:
    //             body.style.backgroundColor = 'red';
    //             break;

    //         case 2:
    //             body.style.backgroundColor = 'green';
    //             break;

    //         case 3:
    //             body.style.backgroundColor = 'blue';
    //             break;
    //     }
    // });

    let btNight = document.querySelector('.Night');

    btNight.addEventListener('click', event => {
        body.classList.toggle('nightMode');
    })
});