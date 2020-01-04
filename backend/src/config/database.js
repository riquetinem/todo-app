const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo', 
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    // .then(conn => {
    //     console.log("conexao ok");
    // })
    // .catch(err => {
    //     console.log("erro na conexao");
    // })
