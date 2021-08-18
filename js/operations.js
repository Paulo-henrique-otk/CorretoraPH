let formbutton = document.querySelector(".form__button");
formbutton.addEventListener("click",function (){
      let confirmation = document.querySelector(".confirmation");
      confirmation.classList.add("animate__backInUp");
      confirmation.style.display = "block";
      let selecttypeoperation = document.getElementById("tipo");
      let qtdactions = document.getElementById("qtdactions");
      let custunity = document.getElementById("custunity");
      let custcorrent = document.getElementById("custcorrent"); 
      let valorCompra = Number(qtdactions.value) * Number(custunity.value);
      let taxas = 0.00003125 + 0.000275 + Number(custcorrent.value);
      arrayobjectsoperations.push({
        "tipoDeOperacao":selecttypeoperation.value,
        "quantidade":Number(qtdactions.value),
        "custoUnitario":Number(custunity.value),
        "taxas":taxas.toFixed(2),
        "getvalorNegociacao" : function getValorNegociacao(){
        return selecttypeoperation.value == "Compra" ? Number(valorCompra.toFixed(2)) + Number(taxas.toFixed(2)) 
        : Number(valorCompra.toFixed(2)) - Number(taxas.toFixed(2));
        },
        Stock : {
            "codigo": arrayobjectsStocks[Number(actionselect.value)].codigo,
             "nome": arrayobjectsStocks[Number(actionselect.value)].nome
            }
     });
     let actiontext = document.getElementById("actiontext");
     let operationtext = document.getElementById("operationtext");
     let qtdtext = document.getElementById("qtdtext");
     let custunitext = document.getElementById("custunitext");
     let custcorrtex = document.getElementById("custcorrtext");
     let valtranstext = document.getElementById("valtranstext");
     let taxatext = document.getElementById("taxatext");
     let valtottext = document.getElementById("valtottext");

     actiontext.innerHTML = arrayobjectsStocks[Number(actionselect.value)].nome;
     operationtext.innerHTML = selecttypeoperation.value;
     qtdtext.innerHTML = Number(qtdactions.value);
     custunitext.innerHTML = Number(custunity.value);
     custcorrtex.innerHTML =  Number(custcorrent.value);
     valtranstext.innerHTML = valorCompra.toFixed(2);
     taxatext.innerHTML = taxas.toFixed(2);
     let total;
     if(selecttypeoperation.value == "Compra"){
     total = Number(valorCompra.toFixed(2)) + Number(taxas.toFixed(2));
     }else if(selecttypeoperation.value == "Venda"){
     total = Number(valorCompra.toFixed(2)) - Number(taxas.toFixed(2));
     }
     valtottext.innerHTML = total.toFixed(2);

  let tablebody = document.getElementById("tablebody");
  tablebody.innerHTML += `<tr class="table_row">
  <td class="table__colum efect-table" >${ arrayobjectsStocks[Number(actionselect.value)].nome}</td>
  <td class="table__colum efect-table" >${selecttypeoperation.value}</td>
  <td class="table__colum efect-table" >${custunity.value}</td>
  <td class="table__colum efect-table" >${total.toFixed(2)}</td>
  <td class="table__colum efect-table" >${qtdactions.value}</td>
</tr>`;

qtdactions.value = "";
custunity.value = "";
custcorrent.value = ""; 
  });