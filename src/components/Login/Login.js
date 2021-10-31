import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import '../Header/Header.css'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingPopup, setError, setUser, signInWithEmailAndPassword, auth } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {

            })
    }
    const handleSignInWithGoogle = () => {
        signInUsingPopup()
            .then(result => {
                setUser(result.user)
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='login-body'>
            <div className='login'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Please login</h3>
                    <input {...register("email", { required: true })} placeholder='Email' />
                    {errors.email && "Email is required"}
                    <input {...register("password", { required: true })} placeholder='Password' />
                    {errors.password && "password is required"}

                    <input type="submit" value='Login' />
                    <p>New at Hotel Booking?<Link to='/register'>Register Now</Link></p>
                </form>

            </div>
            <button className='m-3 btn btn-warning' onClick={handleSignInWithGoogle}><i className="fab fa-google"><small>Sign in with google</small></i></button>
        </div>
    );
};

export default Login;