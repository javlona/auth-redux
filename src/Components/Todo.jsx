import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add, toggle, remove } from '../store/todo'

function Todo() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(add(value))
        setValue('')
        console.log(value)
    }

    const removeHandler = (id) => {
        dispatch(remove(id))
    }

    const toggleHandler = (id) => {
        dispatch(toggle(id))
    }

  return (
    <div>
        <form onSubmit={ submitHandler }>
            <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button type="submit">add</button>
        </form>
        <div>
            {
                todos.map(item => (
                    <div key={item.id} onClick={() => toggleHandler(item.id)}>
                        {item.title}
                        <button onClick={(e) => {
                            e.stopPropagation();
                            removeHandler(item.id)
                            }}>
                                delete
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Todo