const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//app 시작 시 localstorage에 값이 있으면 저장하기 위해 const-> let 으로 변경.
let toDos = [];


//toDoinput 값 받기.
function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value =""; //input 초기화.
    const newTodoObj = {
        text : newTodo,
        id: Date.now()
    }

    if(newTodo !=null)
    {
        //화면에 추가 후 localStorage에 저장하기.
        toDos.push(newTodoObj);
        paintTodoList(newTodoObj); //argument : Object
        saveToDos();
    }
}

//localstorage에 등록된 것을 화면 Todo리스트에 보여주기.
//ToDo 리스트에 보여주기 위해서 HTML 요소들 생성.
//구조는 1.li -> 2.span / 2.button
//Parameter Object
function paintTodoList(x){
    const appendli = document.createElement("li");
    //li태그 ID에 newTodoObj.id 값 넣어주기.
    appendli.id = x.id;
    const appendSpan = document.createElement("span");
    const appendButton = document.createElement("button");

    appendSpan.innerHTML = x.text;
    appendButton.innerText = "❌";
    appendButton.addEventListener("click", deleteToDo);
    
    appendli.appendChild(appendSpan);
    appendli.appendChild(appendButton);
    toDoList.appendChild(appendli);
}

function saveToDos() {
    //배열을 저장하기 위해 JSON형태로 변환하여 저장하기.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//Delete ToDo
function deleteToDo(event){
    const li = event.target.parentElement;
    
    li.remove();

    //3)(노마드코더) 배열.Filter를 사용해서 선택된 배열index를 제외한 나머지 배열가져오기.
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    saveToDos();

}

//Main
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    //localStorage에 JSON 배열로 저장된 것을 String 으로 변환.
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodoList);
}