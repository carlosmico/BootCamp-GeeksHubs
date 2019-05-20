document.addEventListener('DOMContentLoaded', () => {
    console.log('Ya he cargado el DOM');

    let input = document.querySelector('.input');

    input.addEventListener('keyup', event => {
        input.placeholder = "Add task...";
        input.classList.remove("inputError");

        if (event.keyCode === 13) {
            let listaTareas = document.querySelector('.todo');

            let nombreTarea = event.target.value;

            if (nombreTarea === "") {
                if (input.classList[input.classList.item - 1] !== "inputError") {
                    input.classList.add("inputError");
                }

                input.placeholder = "The taskname can't be empty!";
            } else {
                listaTareas.appendChild(creaTarea(nombreTarea));

                event.target.value = "";
            }
        }
    });
});

const creaTarea = (nombreTarea) => {
    let task = document.createElement("div");
    task.innerHTML = `<input name='taskName' class='inputFake' value='${nombreTarea}'/>`;
    task.classList.add('task');

    let buttoner = document.createElement("div");
    buttoner.classList.toggle("buttoner");

    //Asignacion de miembros
    task.addEventListener("dblclick", event => {
        let miembro = document.createElement('img');
        miembro.src = "./img/miembro.png";

        miembro.classList.add("miembro-icon");

        if (typeof buttoner.childNodes[2] === 'undefined') {
            buttoner.appendChild(miembro);
        } else {
            buttoner.childNodes[2].remove();
        }

        //existeMiembro = !existeMiembro;
    });

    //Boton de completar
    let completeButton = document.createElement("button");
    completeButton.innerText = "✔️";
    completeButton.addEventListener("click", event => {


        if (completeButton.innerText === "✔️") {
            completeButton.innerText = "❌"

            let doing = document.querySelector('.done');

            doing.appendChild(task);
        } else {
            completeButton.innerText = "✔️"

            let doing = document.querySelector('.toDo');

            doing.appendChild(task);
        }
    })

    //Boton de eliminar
    let removeButton = document.createElement("button");
    removeButton.innerText = "🗑️";
    removeButton.addEventListener('click', event => {
        task.remove();
    });

    buttoner.appendChild(completeButton);
    buttoner.appendChild(removeButton);

    //SUBTAREAS
    let subTasks = document.createElement("div");
    subTasks.classList.add("subTasks");

    let subInput = document.createElement('input');
    subInput.placeholder = "Add subtask...";
    subInput.name = "subTask";
    subInput.classList.add("inputSubTask");

    subInput.addEventListener("keyup", event => {
        if (event.keyCode === 13) {
            event.target.parentNode.appendChild(creaTarea(subInput.value));
            subInput.value = "";
        }
    });

    subTasks.appendChild(subInput);

    task.appendChild(subTasks);
    task.appendChild(buttoner);

    return task;
}