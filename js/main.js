document.getElementById('btn-triangle').addEventListener('click' , function(){

    const nameOfTriangle = getNameById('name-triangle');
    const triangleFirstInputValue = getInputValueById('triangle-first-input');
    const triangleSecondInputValue = getInputValueById('triangle-second-input');
   
    if(isNaN(triangleFirstInputValue) || triangleFirstInputValue <0 ){
        alert('Wrong number')
        return ;
    }
    if(isNaN(triangleSecondInputValue) || triangleSecondInputValue <0 ){
        alert('Wrong number')
        return ;
    }

    const triangleCalculat = 0.5 * triangleFirstInputValue * triangleSecondInputValue ;

    addTableData(nameOfTriangle ,triangleCalculat);

    document.getElementById('btn-triangle').setAttribute('disabled' , true);
})

// rectangle functional Calculate 

document.getElementById('btn-rectangle').addEventListener('click' , function(){

    const nameOfRectangle = getNameById('rectangle-name');
    const rectangleFirstInputValue = getInputValueById('rectangle-first-input');
    const rectangleSecondInputValue = getInputValueById('rectangle-second-input');

    if(isNaN(rectangleFirstInputValue) || rectangleFirstInputValue <0 ){
        alert('Wrong number')
        return ;
    }
    if(isNaN(rectangleSecondInputValue) || rectangleSecondInputValue <0 ){
        alert('Wrong number')
        return ;
    }

    const rectangleCalculate = rectangleFirstInputValue * rectangleSecondInputValue ;

    addTableData(nameOfRectangle , rectangleCalculate);

    document.getElementById('btn-rectangle').setAttribute('disabled' , true);
})

// parallelogram functional Calculate function 

document.getElementById('btn-Parallelogram').addEventListener('click',function (){
    const nameOfParallelogram = getNameById('parallelogram-name');
    const parallelogramFirstInputValue = getInputValueById('parallelogram-first-input');
    const parallelogramSecondInputValue = getInputValueById('parallelogram-second-input');

    if(isNaN(parallelogramFirstInputValue) || parallelogramFirstInputValue <0 ){
        alert('Wrong number')
        return ;
    }
    if(isNaN(parallelogramSecondInputValue) || parallelogramSecondInputValue <0 ){
        alert('Wrong number')
        return ;
    }

    const parallelogramCalculate = parallelogramFirstInputValue * parallelogramSecondInputValue ;

    addTableData(nameOfParallelogram, parallelogramCalculate);

    document.getElementById('btn-Parallelogram').setAttribute('disabled' , true);
})

// rhombus functional Calculate 

document.getElementById('btn-rhombus').addEventListener('click', function(){
    // console.log('rhombus')
    const nameOfRhombus = getNameById('rhombus-name');
    const rhombusFirstInputValue = getInputValueById('rhombus-first-input');
    const rhombusSecondInputValue = getInputValueById('rhombus-second-input');
    
    if(isNaN(rhombusFirstInputValue) || rhombusFirstInputValue <0 ){
        alert('Wrong number')
        return ;
    }
    if(isNaN(rhombusSecondInputValue) || rhombusSecondInputValue <0 ){
        alert('Wrong number')
        return ;
    }

    const rhombusCalculate = 0.5 * rhombusFirstInputValue * rhombusSecondInputValue;

    addTableData(nameOfRhombus , rhombusCalculate);

    document.getElementById('btn-rhombus').setAttribute('disabled' , true);
})

// pentagon  functional Calculate

document.getElementById('btn-pentagon').addEventListener('click' , function(){
    
    const nameOfpentagon= getNameById('pentagon-name');
    const pentagonFirstInputValue = getInputValueById('pentagon-first-input');
    const pentagonSecondInputValue = getInputValueById('pentagon-second-input');

    if(isNaN(pentagonFirstInputValue) || pentagonFirstInputValue <0 ){
        alert('Wrong number')
        return ;
    }
    if(isNaN(pentagonSecondInputValue) || pentagonSecondInputValue <0 ){
        alert('Wrong number')
        return ;
    }

    const pentagonCalculate = 0.5 * pentagonFirstInputValue * pentagonSecondInputValue;

    addTableData(nameOfpentagon , pentagonCalculate);

    document.getElementById('btn-pentagon').setAttribute('disabled' , true);
})

// Ellipse functional Calculate 

document.getElementById('btn-ellipse').addEventListener('click' , function(){
    
    const nameOfEllipse= getNameById('ellipse-name');
    const ellipseFirstInputValue = getInputValueById('ellipse-first-input');
    const ellipseSecondInputValue = getInputValueById('ellipse-second-input');

    if(isNaN(ellipseFirstInputValue) || ellipseFirstInputValue <0 ){
        alert('Wrong number')
        return ;
    }
    if(isNaN(ellipseSecondInputValue) || ellipseSecondInputValue <0 ){
        alert('Wrong number')
        return ;
    }

    const ellipseCalculate = 3.14 * ellipseFirstInputValue * ellipseSecondInputValue;

    addTableData(nameOfEllipse , ellipseCalculate);

    document.getElementById('btn-ellipse').setAttribute('disabled' , true);
})


document.getElementById('btn-blog').addEventListener('click' , function(){
    window.location.href = "blog.html"
})

// Card backgroundColor randomColor genarate 

const triangleRandomBg = document.getElementById('triangle-random-bg');
triangleRandomBg.addEventListener('mouseover', function() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '70%';
  const lightness = '50%';
  const randomColor = `hsl(${hue}, ${saturation}, ${lightness})`;
  triangleRandomBg.style.backgroundColor = randomColor;
  triangleRandomBg.style.color = 'white' ;
});

const rectangleRandomBg = document.getElementById('rectangle-random-bg');
rectangleRandomBg.addEventListener('mouseover', function() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '70%';
  const lightness = '50%';
  const randomColor = `hsl(${hue}, ${saturation}, ${lightness})`;
  rectangleRandomBg.style.backgroundColor = randomColor;
  rectangleRandomBg.style.color = 'white' ;
});

const parallelogramRandomBg = document.getElementById('parallelogram-random-bg');
parallelogramRandomBg.addEventListener('mouseover', function() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '70%';
  const lightness = '50%';
  const randomColor = `hsl(${hue}, ${saturation}, ${lightness})`;
  parallelogramRandomBg.style.backgroundColor = randomColor;
  parallelogramRandomBg.style.color = 'white' ;
});

const rhombusRandomBg = document.getElementById('rhombus-random-bg');
rhombusRandomBg.addEventListener('mouseover', function() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '70%';
  const lightness = '50%';
  const randomColor = `hsl(${hue}, ${saturation}, ${lightness})`;
  rhombusRandomBg.style.backgroundColor = randomColor;
  rhombusRandomBg.style.color = 'white' ;
});

const pentagonRandomBg = document.getElementById('pentagon-random-bg');
pentagonRandomBg.addEventListener('mouseover', function() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '70%';
  const lightness = '50%';
  const randomColor = `hsl(${hue}, ${saturation}, ${lightness})`;
  pentagonRandomBg.style.backgroundColor = randomColor;
  pentagonRandomBg.style.color = 'white' ;
});

const ellipseRandomBg = document.getElementById('ellipse-random-bg');
ellipseRandomBg.addEventListener('mouseover', function() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '70%';
  const lightness = '50%';
  const randomColor = `hsl(${hue}, ${saturation}, ${lightness})`;
  ellipseRandomBg.style.backgroundColor = randomColor;
  ellipseRandomBg.style.color = 'white' ;
});


