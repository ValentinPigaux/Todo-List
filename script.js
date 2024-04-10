const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    // check if input box empty
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        // if not empty, create the task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // add the cross icon
        let span =document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// save the tasks in the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();