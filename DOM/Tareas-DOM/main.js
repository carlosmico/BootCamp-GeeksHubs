document.addEventListener('DOMContentLoaded', () => {
    console.log('Ya he cargado el DOM');

    //Evento drop
    let done = document.querySelector(".done");
    done.setAttribute("ondragover", event => {
        event.preventDefault();
    });
    done.setAttribute("drop", event => {
        console.log(event);
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
    });


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
                let tarea = createTask(nombreTarea);

                listaTareas.appendChild(tarea);

                event.target.value = "";
            }
        }
    });
});

const createTask = (taskName) => {
    let task = document.createElement("div");
    task.classList.add('task');

    //Titulo de la tarea
    let title = document.createElement("h3");
    title.innerText = `${taskName}`;
    title.setAttribute("contentEditable", true);


    let taskNameTemp;

    title.addEventListener("focus", event => {
        taskNameTemp = event.target.innerText;
    });

    title.addEventListener("blur", event => {
        if (event.target.innerText === "") {
            event.target.innerText = taskNameTemp;
        }
    });

    task.appendChild(title);

    let buttoner = document.createElement("div");
    buttoner.classList.toggle("buttoner");

    //Asignacion de miembros
    task.addEventListener("dblclick", event => {
        let miembro = document.createElement('img');
        miembro.src = "./img/miembro.png";

        miembro.classList.add("miembro-icon");

        console.log(typeof buttoner.childNodes[2]);

        if (typeof buttoner.childNodes[2] === 'undefined') {
            buttoner.appendChild(miembro);
        } else {
            buttoner.childNodes[2].remove();
        }
    });

    //Boton de completar
    let completeButton = document.createElement("button");
    completeButton.innerText = "✔️";
    completeButton.addEventListener("click", event => {


        if (completeButton.innerText === "✔️") {
            completeButton.innerText = "❌"

            console.log(event.target.parentNode.parentNode.parentNode);

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
            event.target.parentNode.appendChild(createTask(subInput.value));
            subInput.value = "";
        }
    });

    subTasks.appendChild(subInput);

    task.appendChild(subTasks);
    task.appendChild(buttoner);

    return task;
}

const changeBackground = (picker) => {
    let color = picker.toRGBString();

    document.body.style.backgroundColor = color;

    console.log(color);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    console.log(document.getElementById(data));
    var data = ev.dataTransfer.getData("text");
    let objToDrop = document.getElementById(data);
    ev.target.appendChild(objToDrop);

}