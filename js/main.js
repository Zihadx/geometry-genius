document.getElementById('btn-triangle').addEventListener('click' , function(){
    serial+=1;

    const nameOfTriangle = getNameById('name-triangle');

    const triangleFirstInputValue = getInputValueById('triangle-first-input');

    const triangleSecondInputValue = getInputValueById('triangle-second-input');

    const triangleCalculat = 0.5 * triangleFirstInputValue * triangleSecondInputValue ;

    addTableData(nameOfTriangle ,triangleCalculat);
})

// rectangle functional Calculate 

document.getElementById('btn-rectangle').addEventListener('click' , function(){
    serial+=1;

    const nameOfRectangle = getNameById('rectangle-name');

    const rectangleFirstInputValue = getInputValueById('rectangle-first-input');

    const rectangleSecondInputValue = getInputValueById('rectangle-second-input');


    const rectangleCalculate = rectangleFirstInputValue * rectangleSecondInputValue ;

    addTableData(nameOfRectangle , rectangleCalculate);
})

// parallelogram functional Calculate function 

document.getElementById('btn-Parallelogram').addEventListener('click',function (){
    serial+=1;
    const nameOfParallelogram = getNameById('parallelogram-name');
    
    const parallelogramFirstInputValue = getInputValueById('parallelogram-first-input');

    const parallelogramSecondInputValue = getInputValueById('parallelogram-second-input');

    const parallelogramCalculate = parallelogramFirstInputValue * parallelogramSecondInputValue ;

    addTableData(nameOfParallelogram, parallelogramCalculate);

})

// rhombus functional Calculate 

document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial+=1;
    // console.log('rhombus')
    const nameOfRhombus = getNameById('rhombus-name');
    const rhombusFirstInputValue = getInputValueById('rectangle-first-input');
    const rhombusSecondInputValue = getInputValueById('rectangle-second-input');

    const rhombusCalculate = 0.5 * rhombusFirstInputValue * rhombusSecondInputValue;

    addTableData(nameOfRhombus , rhombusCalculate);
})

// pentagon  functional Calculate

document.getElementById('btn-pentagon').addEventListener('click' , function(){
    serial+=1;
    const nameOfpentagon= getNameById('pentagon-name');
    const pentagonFirstInputValue = getInputValueById('pentagon-first-input');
    const pentagonSecondInputValue = getInputValueById('pentagon-second-input');

    const pentagonCalculate = 0.5 * pentagonFirstInputValue * pentagonSecondInputValue;

    addTableData(nameOfpentagon , pentagonCalculate);
})

// Ellipse functional Calculate 

document.getElementById('btn-ellipse').addEventListener('click' , function(){
    serial+=1;
    const nameOfEllipse= getNameById('ellipse-name');
    const ellipseFirstInputValue = getInputValueById('ellipse-first-input');
    const ellipseSecondInputValue = getInputValueById('ellipse-second-input');

    const ellipseCalculate = 0.5 * ellipseFirstInputValue * ellipseSecondInputValue;

    addTableData(nameOfEllipse , ellipseCalculate);
})


