// global const

const formContainer = document.createElement('form')
formContainer.setAttribute('id', 'input-text-name-of-task')

const inputTextNameOfTask = document.createElement('input')
inputTextNameOfTask.setAttribute('type', 'text')
inputTextNameOfTask.setAttribute('name', 'title-of-task')
inputTextNameOfTask.setAttribute('placeholder', 'Enter the title of your task')
inputTextNameOfTask.setAttribute('required', '')

const inputDateOfTask = document.createElement('input')
inputDateOfTask.setAttribute('type', 'date')
inputDateOfTask.setAttribute('name', 'date-of-task')

const buttonCancelForm = document.createElement('button')
buttonCancelForm.setAttribute('type', 'button')
buttonCancelForm.setAttribute('id', 'button-cancel-form')
buttonCancelForm.textContent = 'Cancel'

const buttonSendForm = document.createElement('input')
buttonSendForm.setAttribute('type', 'submit')
buttonSendForm.setAttribute('value', 'Send')
buttonSendForm.setAttribute('id', 'button-send-form')


formContainer.prepend(inputTextNameOfTask)
formContainer.appendChild(inputDateOfTask)
formContainer.appendChild(buttonCancelForm)
formContainer.appendChild(buttonSendForm)


const main = document.querySelector('main')

const addTask = document.createElement('div')

//

const logoTitle = document.querySelector('#logo-title')
logoTitle?.addEventListener('click', reload)

function reload() {
    location.reload()
}

const addTaskForm = document.querySelector('#add-task')
addTaskForm?.addEventListener('click', callTaskContainer)

function callTaskContainer() {
    main?.prepend(formContainer)
}

buttonCancelForm.addEventListener('click', cancelTask)

function cancelTask() {
    formContainer.remove()
}

buttonSendForm.onsubmit = (ev) => {
    ev.preventDefault();
}

buttonSendForm.addEventListener('submit', createTask)

function createTask() {
    formContainer.remove()
}

