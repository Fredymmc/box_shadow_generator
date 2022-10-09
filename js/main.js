const textInput = document.querySelector("[type='text']");
const button = document.querySelector("[type='button']");
const range = document.querySelector("#range1");
const range2 = document.querySelector("#range2");
const hShadow = document.querySelector("#hShadow");
const vShadow = document.querySelector("#vShadow");
const bRadius = document.querySelector("#bRadius");
const sRadius = document.querySelector("#sRadius");
const borRadius = document.querySelector("#borRadius");
const shadowCol = document.querySelector("#shadowCol");
const p = document.querySelector("p");
const cuadadro = document.querySelector(".square");
const selectColor = document.querySelector("#colorSquare");
const salida = document.querySelector(".salida");



    hShadow.oninput = horizShadow;
    vShadow.oninput = vertShadow;
    bRadius.oninput = blurRadius;
    sRadius.oninput = spreadRadius;
    shadowCol.oninput = shadowColor;
    range.oninput = widthSquare;
    range2.oninput = heightSquare;
    borRadius.oninput = borderRadius;
    selectColor.oninput = squareColor;

   
    // String.prototype.convertToRGB = function(){
    //     if(this.length != 6){
    //         throw "Only six-digit hex colors are allowed.";
    //     }
    
    //     var aRgbHex = this.match(/.{1,2}/g);
    //     var aRgb = [
    //         parseInt(aRgbHex[0], 16),
    //         parseInt(aRgbHex[1], 16),
    //         parseInt(aRgbHex[2], 16)
    //     ];
    //     return aRgb;
    // }

    // clors2 = shadowCol.value;
    // console.log(shadowCol);
    
    
    function horizShadow() {
        cuadadro.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;
        salida.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px rgb(${colorS2})`;
    }
    // function horizShadow() {
    //     cuadadro.style.boxShadow = `${hShadow.value}px 10px 10px 0px rgba(0, 0, 0, 1)`;
    //     salida.innerHTML = `box-shadow: ${hShadow.value}px 10px 10px 0px rgba(0, 0, 0, 1)`
    // }
    
    function vertShadow() {
        cuadadro.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;
        salida.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    }
    
    function blurRadius() {
        cuadadro.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;
        salida.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    }
    
    function spreadRadius() {
        cuadadro.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;
        salida.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    }
    
    function shadowColor() {
        cuadadro.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;
        salida.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    }
    
    function shadowColor() {
        cuadadro.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`;
        salida.innerHTML = `box-shadow: ${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    }
    
    function widthSquare() {
        cuadadro.style.width = `${range.value}px`;
    }
    
    function heightSquare() {
        cuadadro.style.height = `${range2.value}px`;
    }

    function borderRadius() {
        cuadadro.style.borderRadius = `${borRadius.value}px`;
    }

    function squareColor() {
        cuadadro.style.backgroundColor = `${selectColor.value}`;
    }

    


    
