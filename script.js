const form= document.getElementById('form');
const toDoInput=document.getElementById('input');
const toDoList=document.getElementById('toDoList');
retrieveLS();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input= toDoInput.value;
    if(input){
    const listEl= document.createElement('li');
    listEl.innerHTML= input;
    toDoList.appendChild(listEl);
    toDoInput.value='';
    updateLS();
       }
    });
form.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    toDoList.removeChild(ev.target); 
    updateLS();
});
form.addEventListener('click', (ev) => {
   
    const el=ev.target;
    el.classList.toggle("completed");
    updateLS();
})
function updateLS(){
    const toDoEls=document.querySelectorAll('li');
    const toDos = [];
    toDoEls.forEach(toDo => {
        toDos.push({
            text: toDo.innerText,
            completed: toDo.classList.contains('completed')
        });
    });
    localStorage.setItem('toDos',JSON.stringify(toDos));
}
function retrieveLS(){
    const data= localStorage.getItem('toDos');
    const toDos= JSON.parse(data);
    if(toDos){
    toDos.forEach(toDo => {
        const el= document.createElement('li');
        console.log(toDo.text);
        el.innerHTML= toDo.text;
        if (toDo.completed == true){
            el.classList.toggle('completed');
        }
        toDoList.appendChild(el);
        
         });
    }
}