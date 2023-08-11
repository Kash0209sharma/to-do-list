const inputBox=document.getElementById("input-box");
const listContanier=document.getElementById("list-contanier");
function addTask(){
    if(inputBox.value ==''){
        alert("You must write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContanier.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}
listContanier.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("cheked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
},false);

function saveData(){
    localStorage.setItem("data",listContanier.innerHTML);
}
function showTask(){
    listContanier.innerHTML=localStorage.getItem("data");
}
showTask();