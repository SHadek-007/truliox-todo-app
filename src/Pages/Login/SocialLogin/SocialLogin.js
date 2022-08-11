import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import google from '../../../Assets/logo/google.png';
import github from '../../../Assets/logo/github.png';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] =
        useSignInWithGithub(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user || gitUser){
            navigate('/');
          };
      })

      let errorElement;
      if (error || gitError) {
        errorElement = 
          <div>
            <p className="text-danger">Error: {error?.message} {gitError?.message}</p>
          </div>
      };

      if(loading || gitLoading){
        return <Loading></Loading>
      };

    return (
        <div>
      <div className="d-flex align-items-center">
        <div className="w-50 bg-danger" style={{ height: "1px" }}></div>
        <p className="mt-3 mx-2">or</p>
        <div className="w-50 bg-danger" style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div className="btn-container">
        <button
          onClick={() => signInWithGoogle()}
          className="google d-block mx-auto mb-3"
        >
          {" "}
          <img
            className="me-5"
            style={{ height: "32px" }}
            src={google}
            alt=""
          />{" "}
          Sign in with Google
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="git d-block mx-auto mb-3"
        >
          {" "}
          <img
            className="me-5 bg-white rounded-circle"
            src={github}
            alt=""
          />{" "}
          Sign in with Github
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;