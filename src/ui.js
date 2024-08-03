//importar la funcion para traer las tareas del localStorage
import { getTaks } from "./task";

//funcion para visualizar las tareas
export const renderTasks = () => {
    const taskList = document.getElementById ("task-list");
    taskList.innerHTML = "";
    const tasks = getTaks ();
    tasks.forEach( (task) => {
        const li = document.createElement("li");
        li.setAtribute("data-id", task.id);

        if (task.completed === true) {
            li.classList.add("completed");
            li.innerHTML = `
                ${task.text}
                <button class="delete"> Borrar </button>
                <buton class="toggle"> ${task.completed === true ? "Regresar" : "completado" } </button>
            `;

            taskList.appendChild(li);
        }
    });
};