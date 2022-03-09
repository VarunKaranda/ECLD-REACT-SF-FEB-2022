function addTask() {
  if (!document.querySelector(".input").value) {
    alert("You cannot create an empty task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#addTask input").value}
                </span>
                <button class="delete">
                Delete
                </button>
            </div>
        `;
    document.querySelector(".input").value = "";

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
}
