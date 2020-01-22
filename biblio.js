// Criando a Tabela de Livros
let books = [
    {
        numero: '0001',
        nome: 'Como fazer sentido e bater o martelo',
        autor: 'Alexandro Aolchique',
        ano: 2017,
        status: 'Disponível',
        emprestado: ''
    },
    {
        numero: '0002',
        nome: 'Código Limpo',
        autor: 'Tio Bob',
        ano: 2001,
        status: 'Disponível',
        emprestado: ''
    },
    {
        numero: '0003',
        nome: 'Poggio Scali',
        autor: 'Hortência Marcari',
        ano: 2010,
        status: 'Disponível',
        emprestado: ''
    }
]

function criarTableHead(table, data){
    var thead = table.createTHead()
    var row = thead.insertRow()
    for (var key of data){
        var th = document.createElement('th')
        var text = document.createTextNode(key)
        th.appendChild(text)
        row.appendChild(th)
    }
}

function criarTabela(table, data){
    for(var element of data){
        var row = table.insertRow()
        for(key in element) {
            var cell = row.insertCell()
            var text = document.createTextNode(element[key])
            cell.appendChild(text)
        }
    }
}

var table = document.querySelector('#tabemprest')
var data = Object.keys(books[0])

criarTableHead(table,data)
criarTabela(table, books)
