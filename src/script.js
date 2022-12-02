"use strict";
// global const
var formContainer = document.createElement('form');
formContainer.setAttribute('id', 'input-text-name-of-task');
var inputTextNameOfTask = document.createElement('input');
inputTextNameOfTask.setAttribute('type', 'text');
inputTextNameOfTask.setAttribute('name', 'title-of-task');
inputTextNameOfTask.setAttribute('placeholder', 'Enter the title of your task');
inputTextNameOfTask.setAttribute('required', '');
var inputDateOfTask = document.createElement('input');
inputDateOfTask.setAttribute('type', 'date');
inputDateOfTask.setAttribute('name', 'date-of-task');
var buttonCancelForm = document.createElement('button');
buttonCancelForm.setAttribute('type', 'button');
buttonCancelForm.setAttribute('id', 'button-cancel-form');
buttonCancelForm.textContent = 'Cancel';
var buttonSendForm = document.createElement('input');
buttonSendForm.setAttribute('type', 'submit');
buttonSendForm.setAttribute('value', 'Send');
buttonSendForm.setAttribute('id', 'button-send-form');
formContainer.prepend(inputTextNameOfTask);
formContainer.appendChild(inputDateOfTask);
formContainer.appendChild(buttonCancelForm);
formContainer.appendChild(buttonSendForm);
var main = document.querySelector('main');
//
var logoTitle = document.querySelector('#logo-title');
logoTitle === null || logoTitle === void 0 ? void 0 : logoTitle.addEventListener('click', reload);
function reload() {
    location.reload();
}
var addTaskForm = document.querySelector('#add-task');
addTaskForm === null || addTaskForm === void 0 ? void 0 : addTaskForm.addEventListener('click', callTaskContainer);
function callTaskContainer() {
    main === null || main === void 0 ? void 0 : main.prepend(formContainer);
}
buttonCancelForm.addEventListener('click', cancelTask);
function cancelTask() {
    formContainer.remove();
}
buttonSendForm.addEventListener('submit', createTask);
buttonSendForm.onsubmit = function (ev) {
    ev.preventDefault();
};
function createTask() {
    formContainer.remove();
    var addTaskDiv = document.createElement('div');
    addTaskDiv.setAttribute('class', 'add-task-div');
    var titleTask = document.createElement('p');
    var dateTask = document.createElement('input');
    dateTask.setAttribute('type', 'date');
    dateTask.setAttribute('name', 'date-of-task-send');
    var buttonTask = document.createElement('button');
    buttonTask.setAttribute('type', 'button');
    buttonTask.textContent = 'Realized';
    main === null || main === void 0 ? void 0 : main.prepend(addTaskDiv);
    addTaskDiv.prepend(titleTask);
    addTaskDiv.appendChild(dateTask);
    addTaskDiv.appendChild(buttonTask);
    titleTask.textContent = inputTextNameOfTask.value;
    dateTask.innerHTML = "".concat(inputDateOfTask.value);
}
