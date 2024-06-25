document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", function () {
        const taskText = newTaskInput.value;
        if (taskText.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Hapus";
            deleteButton.classList.add("delete-button");

            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            newTaskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.parentElement.remove();
        }
    });
});
ocument.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const listItem = document.createElement("li");
    listItem.textContent = `Nama: ${nama}, Email: ${email}`;
    document.getElementById("myList").appendChild(listItem);
    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
});
