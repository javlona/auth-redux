import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import { useSelector } from 'react-redux'
import Todo from './Components/Todo';

function App() { 
  const user = useSelector(state => state.user)

  if(user.isAuthenticated) {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={ <h3>Home Page</h3> } />
          <Route path='/todo' element={<Todo />} />
          <Route path='*' element={<Navigate to="/"/>} />
        </Routes>
      </div>
    )
  } else {
    return (
      <div>
        <Routes>
          <Route path='/sign-in' element={ <SignIn /> } />
          <Route path='/sign-up' element={ <SignUp /> } />
          <Route path='*' element={<Navigate to="/sign-in"/>} />
        </Routes>
      </div>
    );
  }

}

export default App;