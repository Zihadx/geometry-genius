document.getElementById('btn-triangle').addEventListener('click' , function(){

    const nameOfTriangle = getNameById('name-triangle');

    const triangleFirstInputValue = getInputValueById('triangle-first-input');

    const triangleSecondInputValue = getInputValueById('triangle-second-input');

    const triangleCalculat = 0.5 * triangleFirstInputValue * triangleSecondInputValue ;

    addTableData(nameOfTriangle ,triangleCalculat);
})


document.getElementById('btn-rectangle').addEventListener('click' , function(){
  
    const nameOfRectangle = getNameById('rectangle-name');

    const rectangleFirstInputValue = getInputValueById('rectangle-first-input');

    const rectangleSecondInputValue = getInputValueById('rectangle-second-input');


    const rectangleCalculate = rectangleFirstInputValue * rectangleSecondInputValue ;

    addTableData(nameOfRectangle , rectangleCalculate);
})

document.getElementById('btn-Parallelogram').addEventListener('click',function(){
    const nameOfParallelogram = getNameById('parallelogram-name');
    
    const parallelogramFirstInputValue = getInputValueById('parallelogram-first-input');

    const parallelogramSecondInputValue = getInputValueById('parallelogram-second-input');

    const parallelogramCalculate = parallelogramFirstInputValue * parallelogramSecondInputValue ;

    addTableData(nameOfParallelogram, parallelogramCalculate);

})