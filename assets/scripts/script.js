const localStorageKey = 'lista-de-tarefas'

const buttonAdd = document.getElementById('add')

buttonAdd.addEventListener("click", event => {

    let inputTask = document.getElementById('task')

    if(!inputTask.value){
        alert('Digite algo para inserir na lista de tarefas!')
    }
    else
    {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: inputTask.value
        })
        
        localStorage.setItem(localStorageKey,JSON.stringify(values))

        let tasks = document.getElementById('tasks')
    }
    inputTask.value = ''

})