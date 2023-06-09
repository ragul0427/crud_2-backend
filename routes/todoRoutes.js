    const express = require("express")
    const router = express.Router()
    const todoController = require('../controllers/todoController')

    // get  /api/todos
    router.get('/', todoController.getAllTodos)

    // post  /api/todos
    router.post('/', todoController.createAllTodos)

    // get  /api/todos/:id
    router.get('/:id', todoController.getTodobyId)


    // put  /api/todos
    router.put('/:id', todoController.updateTodoById)


    // delete  /api/todos
    
    router.delete('/:id', todoController.deleteTodoById)

    module.exports=router




