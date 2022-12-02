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
var addTask = document.createElement('div');
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
buttonSendForm.onsubmit = function (ev) {
    ev.preventDefault();
};
buttonSendForm.addEventListener('submit', createTask);
function createTask() {
    formContainer.remove();
}
