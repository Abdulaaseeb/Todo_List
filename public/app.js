var list = document.getElementById("list")

function todo_list(){
var todo_app = document.getElementById("todo-app")
var li = document.createElement("li")
var textlist = document.createTextNode(todo_app.value)
li.appendChild(textlist)

//------- Create delete button -------//
var deletebtn = document.createElement("button")
var deletetext = document.createTextNode("Delete")
deletebtn.setAttribute("class","btn btn-dark ms-2 mt-1")
deletebtn.setAttribute("onclick","todolist(this)")
deletebtn.appendChild(deletetext)

//------- Create add button ------//
var editbtn = document.createElement("button")
var edittext = document.createTextNode("Edit")
editbtn.appendChild(edittext)
editbtn.setAttribute("class","btn btn-dark ms-2 mt-1")
editbtn.setAttribute("onclick","editItem(this)")
li.appendChild(deletebtn)
li.appendChild(editbtn)

list.appendChild(li)

todo_app.value = ""

// console.log(li)
}

function todolist(e){
    e.parentNode.remove()
}

function editItem(h){
   var val = prompt("Enter the value",h.parentNode.firstChild.nodeValue)
   h.parentNode.firstChild.nodeValue = val
}

function deleteall(){
    list.innerHTML=""
}