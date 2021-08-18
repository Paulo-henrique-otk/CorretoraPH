let actionselect = document.getElementById("action");
for (let i = 0; i < arrayobjectsStocks.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = `${arrayobjectsStocks[i].nome}`;
        option.value = i;
        actionselect.appendChild(option);
    }



