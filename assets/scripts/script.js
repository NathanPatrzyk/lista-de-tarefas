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
            name: inputTask.value,
            status: 'Pendente'
        })
        
        localStorage.setItem(localStorageKey,JSON.stringify(values))

        showValues()
        
    }
})

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

    let tasks = document.getElementById('tasks')
    
    tasks.innerHTML = ''
    for(let i = 0; i < values.length; i++){
        tasks.innerHTML += `<div class="task">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#cbd5e1" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                </svg>
            </span>
            <p>${values[i]['name']}</p>
        </div>`
    }
}

showValues()