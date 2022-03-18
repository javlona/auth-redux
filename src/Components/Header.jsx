import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../store/auth'
import { useDispatch } from 'react-redux'

function Header() {
    const dispatch = useDispatch()
    const singOutHandler = () => {
        dispatch(signOut())
    }

  return (
    <div className="header">
        <Link to='/'>Home</Link>
        <Link to='users'>User List</Link>
        <Link to='/todo'>Todo App</Link>
        <button onClick={singOutHandler}>Sign Out</button>
        
    </div>
  )
}

export default Header