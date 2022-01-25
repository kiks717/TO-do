let toDo = []

const clearBtn = document.getElementById("clear")
let ulEl = document.getElementById('list')
const inputEL = document.getElementById("input-el")
const leadsToDo = JSON.parse(localStorage.getItem("toDo"))
const submitBtn = document.getElementById("submit")
const xBtn = document.getElementById("x")
const toDoLead = JSON.parse(localStorage.getItem("toDO"))
console.log(toDoLead)


if (leadsToDo){
    toDo = leadsToDo
    render(toDo)
}
   

function render(list){
        let listItem = " "
    for(let i = 0; i<list.length;i++){
        listItem+= `<li id='items'>
         ${list[i]}
        </li>`
    }
    
    ulEl.innerHTML = listItem
}


submitBtn.addEventListener("click", function(){
    toDo.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("toDo", JSON.stringify(toDo))
    render(toDo)
})

clearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    toDo = []
    render(toDo)
})




   
