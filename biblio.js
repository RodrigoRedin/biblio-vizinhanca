function adicionar(){
    var table = document.getElementById('tabemprest')
    var numOfRows = table.rows.length
    var numOfCols = table.rows[numOfRows-1].cells.length
    var inserir = []
    inserir[0] = document.getElementById('nome').value
    inserir[1] = document.getElementById('autor').value
    inserir[2] = document.getElementById('ano').value
    var newRow = table.insertRow(numOfRows);
    for (var j = 0; j < numOfCols; j++){
        var newCell = newRow.insertCell(j)
        newCell.innerHTML = inserir[j]
    }
   
}

