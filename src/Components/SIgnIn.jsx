import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import client from "../utils/axiosAuth";
import { signIn } from '../store/auth'
import { useDispatch } from 'react-redux';

function SignIn(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });


  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await client.post("/sign-in", data);
      if (res.status === 200) {
        dispatch(signIn({ user: res.data.payload }));
        navigate("/");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = props;

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">Sign In</h1>
        <p className="form__subtitle">
          Don't you have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
        <div className="form__group">
          <Input
            name="email"
            label="Enter email"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={changeHandler}
          />
          <Input
            name="password"
            label="Enter password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={changeHandler}
          />
          <button title="Next step" type={"submit"}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
