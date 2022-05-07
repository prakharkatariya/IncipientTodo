import React, { useState, useEffect, useRef } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

function TodoAdd(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <InputGroup style={{ maxWidth: '700px', marginLeft: '300px' }}>
                        <FormControl
                            placeholder="Update Task"
                            aria-label="Update a todo"
                            aria-describedby="basic-addon2"
                            value={input}
                            onChange={handleChange}
                            name='text'
                            ref={inputRef}
                            className='todo-input edit'
                        />
                        <Button onClick={handleSubmit} variant="outline-secondary" id="button-addon2">
                            Update
                        </Button>
                    </InputGroup>
                </>
            ) : (
                <>
                    <InputGroup style={{ maxWidth: '700px', marginLeft: '300px' }}>
                        <FormControl
                            placeholder="New Task"
                            aria-label="Add a todo"
                            aria-describedby="basic-addon2"
                            value={input}
                            onChange={handleChange}
                            name='text'
                            ref={inputRef}
                        />
                        <Button onClick={handleSubmit} variant="outline-secondary" id="button-addon2">
                            Add
                        </Button>
                    </InputGroup>
                </>
            )}
        </form>
    );
}

export default TodoAdd;