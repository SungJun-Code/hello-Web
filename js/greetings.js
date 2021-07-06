/*
변수 선언
*/
// '#'은 querySelector Object 의 Path를 적는 것.
// id로 가져올려면 get~ByID 함수사용해야함.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//String
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

/*
Main
*/
if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //loginForm에서 이벤트 발생 시 새로고침하여 onLoginSubmit 함수 실행.
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(); 
}

/*
Function
*/
function onLoginSubmit(event){
    event.preventDefault();
    
    //ID가 loginForm에 "hidden"이라는 명칭을 갖는 class 추가.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
           
    paintGreetings();
}

/* 
아래 String Hello와 변수를 합쳐 String 형식으로 넘어가는 방법은 같으나
아래 방법이 최근에 나온 방법으로 규칙이 존재함.
1) ``이 기호로 시작과 끝 작성. !!! ''와 헷갈림. ``은 숫자 1 옆에 있는 것임.
2) ${변수명} 을 작성해야함.
*/
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}