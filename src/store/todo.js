import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    // {   id: Math.random(),
    //     title: "",
    //     isCompleted: false
    // }
]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add(state, action) {
            state.push({
                title: action.payload,
                id: Math.random(),
                isCompleted: false
            })
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload)
        },
        toggle(state, action) {
            return state.map((item) => item.id === action.payload ? {...item, isCompleted: true} : item)
        },
    },
}) 

export const { add, remove, toggle } = todoSlice.actions
export default todoSlice.reducer