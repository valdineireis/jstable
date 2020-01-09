# Componente JavaScript para criação de Tabela HTML

Exemplo de uso:
```js
// Criação da instância da tabela
const myTable = new Table({ 
    id: 'tbl-dados',
    thead: [
        { field: 'nome', label: 'Nome' }, 
        { field: 'documento', label: 'Documento' }
    ],
    appendIn: document.getElementById('tbl-panel')
});

// Dados para serem listados na tabela
const dados = [
    { nome: "Valdinei Reis", documento: "doc01" },
    { nome: "Siluana Oggioni", documento: "doc02" },
    { nome: "José", documento: "doc03" },
    { nome: "Geralda", documento: "doc04" }
];

// Atribuição dos dados e criação do evento de Click.
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
```