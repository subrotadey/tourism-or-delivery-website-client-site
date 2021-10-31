import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import '../Header/Header.css'

const AddOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://agile-wildwood-80919.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New offer added successfully')
                    reset()
                }

            })
    };

    return (
        <div className='add-offer'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Add a new offer</h4>
                <input {...register("name", { required: true })} placeholder='Offer name' />
                <input {...register("title", { required: true })} placeholder='Offer title' />
                <input type="number" {...register("key", { required: true })} placeholder='Offer price' />
                <input type="text" {...register("details", { required: true })} placeholder='Offer details' />
                <input type="text" {...register("img", { required: true })} placeholder='Offer img url' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddOffer;