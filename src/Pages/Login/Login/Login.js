import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, sendError] =
    useSendPasswordResetEmail(auth);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  });

  if (loading || sending) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const navigateToRegister = (e) => {
    navigate("/register");
  };
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please Enter Your Email Address");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-container p-4 rounded bg-light shadow">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </Form.Group>
        <button
          className="w-50 d-block mx-auto fs-5 btn btn-primary"
          type="submit"
        >
          Login
        </button>
      </Form>
      <p className="mt-3">
        New to ToDo App?
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={navigateToRegister}
        >
          Please Register
        </span>
      </p>
      <p className="mt-3">
        Forget Password?
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={() => resetPassword()}
        >
          Reset Password
        </span>
      </p>
      {errorElement}
      {/* <SocialLogin></SocialLogin> */}
    </div>
  )
};

export default Login;
