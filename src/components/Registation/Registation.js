import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Registation = () => {
    const { setUser, createUserWithEmailAndPassword, auth } = useAuth();
    const history = useHistory()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                history.push('/home')
            })
    };
    return (
        <div className='add-offer'>
            <h1>Register now</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} placeholder='First Name' />
                <input {...register("lastName", { required: true })} placeholder='Last Name' />
                <input type="email" {...register("email", { required: true })} placeholder='E-mail' />
                <input type="password" {...register("password", { required: true })} placeholder='Password' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Registation;