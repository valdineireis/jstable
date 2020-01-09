//const Table = require('./lib/Table');

const myTable = new Table({ 
    id: 'tbl-dados',
    thead: [
        { field: 'nome', label: 'Nome' }, 
        { field: 'documento', label: 'Documento' }
    ],
    appendIn: document.getElementById('tbl-panel')
});

const dados = [
    { nome: "Valdinei Reis", documento: "doc01" },
    { nome: "Siluana Oggioni", documento: "doc02" },
    { nome: "José", documento: "doc03" },
    { nome: "Geralda", documento: "doc04" }
];

myTable.setTBody(
    dados, 
    {
        event: 'click',
        callback: (dado) => {
            console.log('dado', dado);
            alert(dado.nome + ' - ' + dado.documento);
        }
    }
);