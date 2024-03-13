const localStorageKey = 'lista-de-tarefas'
const buttonAddNewTask = document.getElementById('add-new-task')

function validateIfExistsNewTask() {
    let tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputNewTaskValue = document.getElementById('new-task').value
    let exists = tasks.find(x => x.name == inputNewTaskValue)
    
    return !exists ? false : true
}

buttonAddNewTask.addEventListener("click", () => {

    let inputNewTask = document.getElementById('new-task')

    if(!inputNewTask.value) {
        alert('Digite algo para inserir na lista de tarefas!')
    }

    else if(validateIfExistsNewTask()){
        alert('Essa tarefa já existe!')
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

        if (task["status"] == "Pendente") {

            divTasks.innerHTML += `
                <div class="task" id="task-${task['name']}">
                    <span class="do-task" onclick='doTask("${task['name']}")'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                            <path fill="#94a3b8" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                        </svg>
                    </span>
                    <p>${task['name']}</p>
                    <span class="edit-task" onclick='openInputEditTask("${task['name']}")'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                            <path fill="#3b82f6" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"/>
                        </svg>
                    </span>
                    <span class="delete-task" onclick='deleteTask("${task['name']}")'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                            <path fill="#ef4444" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                        </svg>
                    </span>
                </div>
            `

        }
        else if (task["status"] == "Feito") {

            divTasks.innerHTML += `
                <div class="task done" id="task-${task['name']}">
                    <span class="do-task" onclick='doTask("${task['name']}")'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                            <path fill="#94a3b8" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.80-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 6464 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                        </svg>
                    </span>
                    <p>${task['name']}</p>
                    <span class="edit-task" onclick='openInputEditTask("${task['name']}")'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                            <path fill="#3b82f6" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 064-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 056.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l7171L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-42-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"/>
                        </svg>
                    </span>
                    <span class="delete-task" onclick='deleteTask("${task['name']}")'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                            <path fill="#ef4444" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 064-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c94-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 94-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-94-24.6 0-33.9z"/>
                        </svg>
                    </span>
                </div>
            `
        }

    })

}

function deleteTask(name) {

    let tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

    let index = tasks.findIndex(task => task.name == name)

    tasks.splice(index,1)
    
    localStorage.setItem(localStorageKey, JSON.stringify(tasks))

    showTasks()

}

function openInputEditTask(name) {

    let divTask = document.getElementById(`task-${name}`)

    divTask.innerHTML = ''

    divTask.innerHTML += `
        <span class="do-task">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                <path fill="#94a3b8" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
            </svg>
        </span>
        <input id='edit-task-${name}' value="${name}">
        <span onclick='confirmEditTask("${name}")'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#22c55e" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        </span>
    `

}

function confirmEditTask(name) {
    let tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]").filter(task => task.name !== name)
    
    let inputEditTask = document.getElementById(`edit-task-${name}`)

    tasks.push({
        name: inputEditTask.value,
        status: 'Pendente'
    })

    localStorage.setItem(localStorageKey, JSON.stringify(tasks))

    showTasks()

}

function doTask(name) {
    let tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]").filter(task => task.name !== name)

    tasks.push({
        name: name,
        status: 'Feito'
    })

    localStorage.setItem(localStorageKey, JSON.stringify(tasks))

    showTasks()
}

showTasks()