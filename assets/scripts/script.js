const localStorageKey = 'lista-de-tarefas'
const buttonAddNewTask = document.getElementById('add-new-task')

buttonAddNewTask.addEventListener("click", () => {

    let inputNewTask = document.getElementById('new-task')

    if(!inputNewTask.value) {
        alert('Digite algo para inserir na lista de tarefas!')
    }

    else {

        let tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

        tasks.push({
            name: inputNewTask.value,
            status: 'Pendente'
        })
        
        localStorage.setItem(localStorageKey, JSON.stringify(tasks))

        inputNewTask.value = ''

        showTasks()

    }

})

function showTasks() {

    let divTasks = document.getElementById('tasks')
    
    let tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    
    divTasks.innerHTML = ''

    tasks.forEach((task) => {

        divTasks.innerHTML += `
            <div class="task" id="task-${task['id']}">
                <span class="do-task">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                        <path fill="#94a3b8" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                    </svg>
                </span>
                <p id="p-task-${task['id']}">${task['name']}</p>
                <span class="edit-task" onclick="editTask(${task['id']})">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                        <path fill="#3b82f6" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"/>
                    </svg>
                </span>
                <span class="delete-task" onclick="deleteTask(${task['id']})">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                        <path fill="#ef4444" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                    </svg>
                </span>
            </div>
        `

    })

}

function deleteTask(id) {

    let tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

    tasks.splice(id, 1)

    localStorage.setItem(localStorageKey, JSON.stringify(tasks))

    showTasks()

}

function editTask(id) {

    let pTask = document.getElementById(`p-task-${id}`)

    pTask.style.display = 'none'

    let divTask = document.getElementById(`task-${id}`)

    divTask.innerHTML = '<input>'

    // CONTINUAR CÓDIGO PARA EDITAR TASK E PENSAR EM COMO CONCLUIR E DESCONCLUIR TASK USANDO O STATUS DA TASK NO JSON ...

}

showTasks()
