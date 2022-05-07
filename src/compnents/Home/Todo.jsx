import React, { useState } from 'react';
import TodoAdd from './TodoAdd';
import { ListGroup, Form, Button } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todo = ({ todos, removeTodo, removeSelectedTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };
    var selectedId = []
    const handleChange = e => {
        if (e.target.checked) {
            selectedId.push(e.target.id)
        } else {
            selectedId.pop(e.target.id)
        }
    }

    const removeSelected = ids => {
        removeSelectedTodo(ids)
    }

    if (edit.id) {
        return <TodoAdd edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <>
            {todos.map((todo, index) => (
                <div
                    key={index} style={{ display: 'flex' }}
                >
                    <div key={todo.id} >
                        <ListGroup.Item style={{ minWidth: '650px', marginLeft: '300px', }}>
                            <input type="checkbox" id={todo.id}
                                onChange={handleChange} value={todo.text} />{todo.text}</ListGroup.Item>
                    </div>
                    <div className='icons' >
                        <DeleteIcon onClick={() => removeTodo(todo.id)}
                            className='delete-icon' />
                        <EditIcon onClick={() => setEdit({ id: todo.id, value: todo.text })}
                            className='edit-icon' />
                    </div>
                </div>

            ))}
            < Button variant="danger" style={{ marginTop: '50px' }} onClick={() => removeSelected(selectedId)} >Delete Selected</Button >
        </>
    )

};

export default Todo;