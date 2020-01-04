const Todo = require ('./todo');

Todo.methods([
    'get',
    'post',
    'put',
    'delete'
]);

// new = para retonar o novo dato que foi feito o upload no arquivo (caso nao tenha isso, ele retorna o dado com as informações antigas)
// runValidators = para usar as validações, tipo, required: true
Todo.updateOptions({
    new: true,
    runValidators: true
})

module.exports = Todo;