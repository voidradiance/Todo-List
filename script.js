"use strict";

let id = 1;

(function () {
    addToDo();
})();

function addToDo(){
    const form = document.querySelector("form");

    form.querySelector("input[type=submit]");
    form.addEventListener("click", (event) => {
        event.preventDefault();

        const newToDo = document.createElement("div");
        const toDoId = `todo-${id++}`;
        newToDo.setAttribute("id", toDoId);
        newToDo.classList.add("todo");

        const newToDoSpan = document.createElement("span");
        newToDoSpan.textContent = form.todo.value;

        const button = addDoneButton(toDoId);
        button.textContent = "✔️";

        newToDo.append(newToDoSpan);
        newToDo.append(button);
        const scheduler = document.querySelector(`.${form.day.value}`);
        scheduler.append(newToDo);
    });
}

function addDoneButton(toDoId){
    const button = document.createElement("button");
    button.addEventListener("click", () => {
        document.querySelector(`#${toDoId}`).remove();
    });
    return button;
}