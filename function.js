import { parseDiceExpresion } from "./parser.js";

document.getElementById("button").addEventListener("click",calcd20);
document.getElementById("dbutton").addEventListener("click",dOthers);
let countingTable = 0;

function calcd20(){
    var number = Number(document.getElementById("number").value);
    if(number < 1 || number > 20){
        document.getElementById("error").style.display = "block";
    }else{
        document.getElementById("error").style.display = "none";
        var result = document.getElementById("result");
        var random = Math.floor(Math.random() * 20 + 1);
        switch(number){
            case 1:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 19){
                    result.value = random + " Fracasso";
                }else{
                    result.value = random + " Sucesso Normal";
                }
            break;
            case 2:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 18){
                    result.value = random + " Fracasso";
                }else if(random == 19){
                    result.value = random + " Sucesso Normal";
                }else{
                    result.value = random + " Sucesso Bom";
                }
            break;
            case 3:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 17){
                    result.value = random + " Fracasso";
                }else if(random >= 18 && random <= 19){
                    result.value = random + " Sucesso Normal";
                }else{
                    result.value = random + " Sucesso Bom";
                }
            break;
            case 4:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 16){
                    result.value = random + " Fracasso";
                }else if(random >= 17 && random <= 18){
                    result.value = random + " Sucesso Normal";
                }else{
                    result.value = random + " Sucesso Bom";
                }
            break;	
            case 5:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 15){
                    result.value = random + " Fracasso";
                }else if(random >= 16 && random <= 18){
                    result.value = random + " Sucesso Normal";
                }else if(random == 19){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 6:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 14){
                    result.value = random + " Fracasso";
                }else if(random >= 15 && random <= 17){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 18 && random <= 19){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 7:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 13){
                    result.value = random + " Fracasso";
                }else if(random >= 14 && random <= 17){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 18 && random <= 19){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;			
            case 8:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 12){
                    result.value = random + " Fracasso";
                }else if(random >= 13 && random <= 16){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 17 && random <= 19){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 9:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 11){
                    result.value = random + " Fracasso";
                }else if(random >= 12 && random <= 16){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 17 && random <= 19){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 10:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 10){
                    result.value = random + " Fracasso";
                }else if(random >= 11 && random <= 15){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 16 && random <= 18){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 11:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 9){
                    result.value = random + " Fracasso";
                }else if(random >= 10 && random <= 15){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 16 && random <= 18){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 12:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 8){
                    result.value = random + " Fracasso";
                }else if(random >= 9 && random <= 14){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 15 && random <= 18){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 13:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 7){
                    result.value = random + " Fracasso";
                }else if(random >= 8 && random <= 14){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 15 && random <= 18){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 14:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 6){
                    result.value = random + " Fracasso";
                }else if(random >= 7 && random <= 13){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 14 && random <= 18){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 15:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 5){
                    result.value = random + " Fracasso";
                }else if(random >= 6 && random <= 13){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 14 && random <= 17){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 16:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 4){
                    result.value = random + " Fracasso";
                }else if(random >= 5 && random <= 12){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 13 && random <= 17){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 17:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 3){
                    result.value = random + " Fracasso";
                }else if(random >= 4 && random <= 12){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 13 && random <= 17){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 18:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random > 1 && random <= 2){
                    result.value = random + " Fracasso";
                }else if(random >= 3 && random <= 11){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 12 && random <= 17){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 19:
                if(random == 1){
                    result.value = random + " Desastre";
                }else if(random >= 2 && random <= 11){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 12 && random <= 17){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
            case 20:
                if(random >= 1 && random <= 10){
                    result.value = random + " Sucesso Normal";
                }else if(random >= 11 && random <= 16){
                    result.value = random + " Sucesso Bom";
                }else{
                    result.value = random + " Sucesso Extremo";
                }
            break;
        }
        addTable(result.value);
        colorInput(document.getElementById("result"));
    }
}

function addTable(dices, results, total){
    const row = document.createElement('tr');

    const idCol = document.createElement('td');
    idCol.innerHTML = ++countingTable;

    const expressionCol = document.createElement('td');
    expressionCol.innerHTML = dices;

    const resultsCol = document.createElement('td');
    resultsCol.innerHTML = results;

    const totalCol = document.createElement('td');
    totalCol.innerHTML = total;

    row.append(idCol, expressionCol, resultsCol, totalCol);

    table.querySelector('tbody').append(row);
}


function colorInput(inputSelected){
    var input = inputSelected;
    input.style.borderColor = "#ff0000";
    setTimeout(
        function changeColor(){
            input.style.borderColor = "#fff";
        },2000
    );
}

function dOthers() {
    const select = document.getElementById("complimentary-dice-select");
    const results = parseDiceExpresion(select.value);
    const total = results.reduce((prev, curr) => prev + curr.total, 0);

    addTable(
        select.value,
        results.reduce((prev, curr) => prev ? `${prev}, (${curr.values.toString()})` : `(${curr.values.toString()})`, ''),
        total
    );
    const resultInput = document.getElementById("dresult");
    resultInput.value = total;
    colorInput(resultInput);
}