document.getElementById('btn-triangle').addEventListener('click' , function(){
    // console.log('checked')
    const nameTriangle = document.getElementById('name-triangle');
    const nameOfTriangle = nameTriangle.innerText;

    const triangleFirstInput = document.getElementById('triangle-first-input');
    const triangleFirstInputValue = parseFloat(triangleFirstInput.value);
    // console.log(triangleFirstInputValue);

    const triangleSecondInput =
     document.getElementById('triangle-second-input');
    const triangleSecondInputValue = parseFloat(triangleSecondInput.value)

    const triangleCalculat = 0.5 * triangleFirstInputValue * triangleSecondInputValue ;
    // console.log(triangleCalculat);

    const tableCalculate = document.getElementById('table');
    // console.log(tableCalculate);
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${nameOfTriangle}</td>
    <td>${triangleCalculat}</td>
    
    
    
    `
    tableCalculate.appendChild(tr);


})