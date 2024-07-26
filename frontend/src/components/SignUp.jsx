import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import { useForm } from "react-hook-form";

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("Form Submitted:", data);
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box bg-yellow-200 px-24 py-8">
                        <form onSubmit={handleSubmit(onSubmit)} method="post">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg dark:text-black">SignUp</h3>
                            <div className='mt-4 space-y-2'>
                                <span>First Name</span>
                                <br />
                                <input 
                                    type="text" 
                                    placeholder='Enter Your First Name' 
                                    className='w-80 border-rounded-md outline-none px-3 py-1' 
                                    {...register("Name", { required: true })} 
                                />
                                {errors.Name && <p className='text-red-400'>Name is required</p>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input 
                                    type="email" 
                                    placeholder='Enter Your Email id' 
                                    className='w-80 border-rounded-md outline-none px-3 py-1' 
                                    {...register("Email", { required: true })} 
                                />
                                {errors.Email && <p className='text-red-400'>Email is required</p>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input 
                                    type="password" 
                                    placeholder='Enter Your Password' 
                                    className='w-80 border-rounded-md outline-none px-3 py-1' 
                                    {...register("password", { required: true })} 
                                />
                                {errors.password && <p className='text-red-400'>Password is required</p>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Mobile</span>
                                <br />
                                <input 
                                    type="text" 
                                    placeholder='Enter Your Mobile Number' 
                                    className='w-80 border-rounded-md outline-none px-3 py-1' 
                                    {...register("Mobile", { required: true })} 
                                />
                                {errors.Mobile && <p className='text-red-400'>Mobile is required</p>}
                            </div>
                            <div className='flex justify-around mt-8'>
                                <button type="submit" className='bg-pink-500 text-white hover:bg-pink-800 px-4 py-1 border rounded'>SignUp</button>
                                <div>Have Account?{" "}
                                    <button type="button" className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>
                                        Login
                                    </button>{" "}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Login />
        </>
    );
}

export default SignUp;
