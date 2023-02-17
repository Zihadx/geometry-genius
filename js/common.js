







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