//lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Funcion para llevar las tareas
export const getTaks = () => tasks;

//Función para agregar una tarea
export const addTask = (task) => {
    const newTask={
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasks));
};