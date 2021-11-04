const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskController = require('./src/controllers/taskController');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/tasks', taskController.registerTask); // registra a tarefa

app.get('/tasks', taskController.getAllTasks); // busca todas as tarefas

app.put('/tasks/:id', taskController.editTask); // edita tarefa

app.delete('/tasks/:id', taskController.delTask); // deleta tarefa

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));