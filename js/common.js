function getNameById(elementId){
    const elementOfName = document.getElementById(elementId);
    const elementName = elementOfName.innerText ;
    return elementName ;
}

function getInputValueById(elementInputId){
    const elementInput = document.getElementById(elementInputId);
    const elementInputValue = parseFloat(elementInput.value);
    return elementInputValue ;
}





// set calculate data on table 

function addTableData(nameOfElement ,elementCalculat){

    const tableCalculate = document.getElementById('table');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${nameOfElement}</td>
    <td>${elementCalculat}</td>
    `
    tableCalculate.appendChild(tr);
}