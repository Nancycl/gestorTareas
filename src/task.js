//lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Funcion para llevar las tareas
export const getTasks = () => tasks;

//Función para agregar una tarea
export const addTask = (task) => {
    const newTask={
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    console.log("task,", task)
    console.log("lista de tareas,", tasks)
    localStorage.setItem("tassks", JSON.stringify(tasks));
};

//funmcion para eliminar tarea
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Funcion para actualizar una tarea
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id) ){
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};