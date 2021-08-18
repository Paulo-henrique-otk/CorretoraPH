function createOperation(){
let button_create = document.querySelector(".operations__create");
let form = document.querySelector(".form");
if(!form.classList.contains("none")){
        form.classList.remove("animate__bounceOutLeft");
        form.classList.add("animate__backInLeft");
        form.classList.add("none");
        form.style.display = "block";    
        button_create.innerHTML = "Esconder Formulário";
}
else{
        form.classList.remove("animate__backInLeft");
        form.classList.add("animate__bounceOutLeft"); 
        form.classList.remove("none");
        button_create.innerHTML = "Criar Operação";
}

}

function TableApear(){
    let button_list = document.querySelector(".operations__list");
    let table = document.querySelector(".table");
    if(!table.classList.contains("noneTable")){
        table.classList.remove("animate__bounceOutRight"); 
        table.classList.add("animate__backInRight");
        table.classList.add("noneTable");
        table.style.display = "block";
        button_list.innerHTML = "Esconder Operações";
    }
    else{
            table.classList.remove("animate__backInRight");
            table.classList.add("animate__bounceOutRight"); 
            table.classList.remove("noneTable");
            button_list.innerHTML = "Listar Operações";
    }
    
    }
  