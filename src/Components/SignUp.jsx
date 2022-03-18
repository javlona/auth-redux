import React, { useState, useContext } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Input from './Input';
import client from './axiosAuth';

function SignUp() {
  const [state, dispatch] = useContext( Auth )
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  })

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await client.post('/sign-up', data)
      if(response.status === 200) {
        dispatch({
          type: SIGN_UP, 
          payload: response.data.payload
        })
        
        navigate('/')
        console.log(response.data)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  const {firstName, lastName, email, password, phone} = data

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">
          Sign Up
        </h1>
        <p className="form__subtitle">
          Already have an account? <Link to="/sign-in">Sign In</Link> 
        </p>
        <div className="form__group">
          <Input name="firstName" label="First Name" type="text" value={firstName} placeholder="First Name" onChange={changeHandler} />
          <Input name="lastName" label="Last Name" type="text" value={lastName} placeholder="Last Name" onChange={changeHandler} />
          <Input name="phone" label="Enter phone" type="tel" value={phone} placeholder="Enter phone" onChange={changeHandler} />
          <Input name="email" label="Enter email" type="email" value={email} placeholder="Enter email" onChange={changeHandler} />
          <Input name="password" label="Enter password" type="password" value={password} placeholder="Enter password" onChange={changeHandler} />
          <button title="Next step" type={'submit'}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp