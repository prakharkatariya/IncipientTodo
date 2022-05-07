import React, { useState } from 'react';
import TodoAdd from './TodoAdd';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const removeSelectedTodo = (ids) => {
        let sid = ids.map(function (x) {
            return parseInt(x);
        });
        const removedArr = [...todos].filter(todo => !sid.includes(todo.id));
        setTodos(removedArr)
    }

    return (
        <>
            <h1>ToDo List</h1>
            <div style={{ marginBottom: '50px' }}>
                <TodoAdd onSubmit={addTodo} />
            </div>
            <Todo
                todos={todos}
                removeTodo={removeTodo}
                removeSelectedTodo={removeSelectedTodo}
                updateTodo={updateTodo}
            />
        </>
    );
}

export default TodoList;