document.getElementById('btn-triangle').addEventListener('click' , function(){

    const nameTriangle = document.getElementById('name-triangle');
    const nameOfTriangle = nameTriangle.innerText;

    const triangleFirstInput = document.getElementById('triangle-first-input');
    const triangleFirstInputValue = parseFloat(triangleFirstInput.value);

    const triangleSecondInput =
     document.getElementById('triangle-second-input');
    const triangleSecondInputValue = parseFloat(triangleSecondInput.value)

    const triangleCalculat = 0.5 * triangleFirstInputValue * triangleSecondInputValue ;

    addTableData(nameOfTriangle ,triangleCalculat);
})