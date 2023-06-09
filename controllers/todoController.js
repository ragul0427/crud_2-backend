const Todo = require ('../models/todo')

// getALL todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos)
    } catch (err) {
        console.log(err)
    }
}

// getALL todos
const createAllTodos = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({
            title,description
        })
        newTodo.save()
        res.json(newTodo)
    } catch (err) {
        console.log(err)
    }
}

// getTodobyId

const getTodobyId = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id)
        if (!todo) {
            return res.status(404).json({error:"todo not found"})
        }
        res.json(todo)
    } catch (err) {
        return res.status(404).json({error:"Internal server error"})
    }
}

// update a todo by id

const updateTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body
        
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true })
        if (!updatedTodo) {
            return res.status(404).json({error:"todo not found"})
        }
        res.json(updatedTodo)
    } catch (err) {
        return res.status(404).json({error:"Internal server error"})
        
    }
}

// delete a todo by id

const deleteTodoById = async (req, res) => {
   
    try {
        console.log(req.params.id)
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id)
        if (!deletedTodo) {
            return res.status(404).json({ error: "todo not found" })
        }
        res.json(deletedTodo)
    } catch (err) {
        return res.status(404).json({ error: "Internal server error" })
        
    }
}


  module.exports = {
    getAllTodos,
    createAllTodos,
    getTodobyId,
    updateTodoById,
    deleteTodoById,
  };