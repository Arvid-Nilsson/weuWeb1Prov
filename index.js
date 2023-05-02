//uppgift 1
function sum (num1,num2){
    return num1 + num2;
}

//uppgift 2
function changeTxt(){
    document.getElementById("demo").innerHTML = "Hej";
}
//uppgift 3
function changeSrc(){
    document.getElementById("bildTag").src = "bild.jpg";
}
//uppgift 4
function subtractArray(numArray){
    tempArray = [];

    for(item of numArray){
        tempArray.push(item - 1);
    }

    return tempArray;
}

//uppgift 5
function allertTxtInput(){
    let text = document.getElementById("txtInput").value;
    
    alert(text);
}