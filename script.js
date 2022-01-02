let attempt = 8

function choose(celda, numeroDeCelda) {
    celda.innerHTML = getsymbol(attempt)
    celda.disabled = true
    getPosition(celda)
    if (check(attempt, getPosition(celda)))
    alert("Gano "+getsymbol(attempt));
    attempt--
}
function getPosition(celda) {
    let id = celda.id.slice(1);
    return id;
}

function getsymbol(attempt) {
    if (attempt % 2 === 0) {
        return "X"
    }
    else {
        return "O"
    }
}
function check(attempt, position) {
    let symbol = getsymbol(attempt)
    switch (position) {
        case "0": {
            let condition1 = checkCell(1,2,symbol)
            let condition2 = checkCell(3,6,symbol)
            let condition3 = checkCell(4,8,symbol)
            return condition1 || condition2 || condition3;
        }
        case "1":{
            let condition1 = checkCell(0,2,symbol)
            let condition2 = checkCell(4,7,symbol)
            return condition1 || condition2;
        }
        case "2":{
            let condition1 = checkCell(0,1,symbol)
            let condition2 = checkCell(4,6,symbol)
            let condition3 = checkCell(5,8,symbol)
            return condition1 || condition2|| condition3;
        }
        case "3":{
            let condition1 = checkCell(4,5,symbol)
            let condition2 = checkCell(0,6,symbol)
            return condition1 || condition2;
        }
        case "4":{
            let condition1 = checkCell(3,5,symbol)
            let condition2 = checkCell(1,7,symbol)
            let condition3 = checkCell(6,2,symbol)
            let condition4 = checkCell(0,8,symbol)
            return condition1 || condition2|| condition3 || condition4;
        }
        case "5":{
            let condition1 = checkCell(3,4,symbol)
            let condition2 = checkCell(2,8,symbol)
            return condition1 || condition2;
        }
        case "6":{
            let condition1 = checkCell(7,8,symbol)
            let condition2 = checkCell(0,3,symbol)
            let condition3 = checkCell(4,2,symbol)
            return condition1 || condition2|| condition3;
        }

        case "7":{
            let condition1 = checkCell(6,8,symbol)
            let condition2 = checkCell(1,4,symbol)
            return condition1 || condition2;
        }
        case "8":{
            let condition1 = checkCell(2,5,symbol)
            let condition2 = checkCell(0,4,symbol)
            let condition3 = checkCell(6,7,symbol)
            return condition1 || condition2|| condition3;
        }
    }
}
function checkCell (position1, position2, symbol){
    return getCell(position1).innerHTML === getCell(position2).innerHTML && getCell(position1).innerHTML === symbol;
}

function getCell(position) {
    let cells = document.querySelectorAll(".cell")
    return cells[position]
}

/* to do mejorar getsymbol */
const celdas = document.querySelectorAll(".cell")

for (const celda of celdas) {

    celda.addEventListener("click", () => {
        choose(celda)
    });

}
