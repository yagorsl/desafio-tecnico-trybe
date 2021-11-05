const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./src/controllers/userController');
const taskController = require('./src/controllers/taskController');
const loginController = require('./src/controllers/loginController');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/users', userController.createUser); // cria usuário

app.post('/login', loginController.findUserByLogin); // faz login

app.post('/tasks', taskController.registerTask); // registra a tarefa

app.get('/tasks', taskController.getAllTasks); // busca todas as tarefas

app.put('/tasks/:id', taskController.editTask); // edita tarefa

app.delete('/tasks/:id', taskController.delTask); // deleta tarefa

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));