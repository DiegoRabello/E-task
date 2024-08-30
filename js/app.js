console.log ("application started")
const input = document.querySelector("#task")
const button = document.querySelector("#button_create")
const ul = document.querySelector(".tasklist")

// document.addEventListener ("DOMContentLoaded", () => {
//     localStorage.setItem()
//     })
button.addEventListener("click", (event) =>  {
    if (!input.value) {
        return alert("A tarefa precisa ser preenchida")
    }
    const checkbox = `<input type="checkbox" />`
    const li = 
        `<li class= "task-item">
            ${checkbox} 
            <p>${input.value}</p>
        </li>`


    ul.innerHTML += li
})