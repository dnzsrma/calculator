let buttons = ["÷","1","2","3","x","4","5","6","+","7","8","9","-",".","0","="];

for( let i=0 ; i< buttons.length ; i++){
    let btn = document.createElement("button");
    btn.innerHTML = buttons[i];
    if(isNaN(parseInt(buttons[i]))){
        btn.className = "button-operator";
        if(buttons[i] === "."){
            btn.id = "dot";
            btn.classList.remove("button-operator");
        }
    }
    else{
        btn.className = "button-number";
    }    
    document.getElementById('calculator-body').appendChild(btn);
}

let buttonsClass = document.getElementsByClassName("button-operator");
buttonsClass[buttonsClass.length-1].classList.add("span-two");

let numberList = document.getElementsByClassName('button-number');
Array.from(numberList).forEach(button => {
    button.addEventListener('click', function(){
        display(button.innerHTML);
    });    
});

let newNumber = "";
let dotControl = false ;


document.getElementById("dot").addEventListener("click",function(){ 
    if(dotControl === true){
        console.log("can only write 1 dot.")
    }
    else{
        if(newNumber.length > 0){
            display(".");
            dotControl = true; 
        }
        else{
            display("0.");
            dotControl = true;
        }
    }
})

function display(number){    
    newNumber += number ;
    document.getElementById('current').innerHTML = newNumber;
}
function changeDisplay(operator){
    dotControl = false;
    if(operator !== "="){
        document.getElementById('previous').innerHTML = document.getElementById('current').innerHTML + " " + operator;
    }
    else{
        if(document.getElementById('previous').innerHTML !== ""){
            document.getElementById('previous').innerHTML = document.getElementById('current').innerHTML;
        }
        
    }
    
    document.getElementById('current').innerHTML = "";
    newNumber = "";
}

document.getElementById("Delete-button").addEventListener("click", function(){
    deleteFunc()
})
function deleteFunc(){
    if(newNumber.length > 0){
        if(newNumber.includes(".")){
            dotControl = false;
        }
            let deletedNumber = newNumber.toString().slice(0,-1);
            newNumber = deletedNumber;
            document.getElementById('current').innerHTML = deletedNumber;
    }    
}

document.getElementById("AC-button").addEventListener("click", function(){
    acFunc();    
})
function acFunc(){
    document.getElementById('previous').innerHTML = "";
    document.getElementById('current').innerHTML = "";
    newNumber = "";
    dotControl = false;
}


let previousRef = document.getElementById('previous');
let currentRef =  document.getElementById('current');
let operatorList = document.getElementsByClassName('button-operator');
Array.from(operatorList).forEach(button => {
    button.addEventListener('click',function(){
        let result = "";
        if(previousRef.innerHTML !== ""){


        }
            if(button.innerHTML === "="){
                if(previousRef.innerHTML.slice(-1) === "+" ) {
                    result = ( parseFloat(previousRef.innerHTML.slice(0,-2)) + parseFloat(currentRef.innerHTML) );
                }
                else if(previousRef.innerHTML.slice(-1) === "÷" ) {
                    result = parseFloat(previousRef.innerHTML.slice(0,-2)) / parseFloat(currentRef.innerHTML);  
                }
                else if(previousRef.innerHTML.slice(-1) === "x" ) {
                    result = parseFloat(previousRef.innerHTML.slice(0,-2)) * parseFloat(currentRef.innerHTML);
                }
                else if(previousRef.innerHTML.slice(-1) === "-" ) {
                    result = parseFloat(previousRef.innerHTML.slice(0,-2)) - parseFloat(currentRef.innerHTML);
                }
    
            }
            changeDisplay(button.innerHTML);   
            currentRef.innerHTML = result.toString();               
    })
})