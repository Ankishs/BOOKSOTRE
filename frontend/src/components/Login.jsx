import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="post">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg dark:text-black">Login</h3>
                        <div className='mt-4 space-y-2'>
                            {/* email */}
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter Your Email id'
                                className='w-80 border-rounded-md outline-none px-3 py-1'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className='text-red-400'>Email is required</p>}
                        </div>
                        {/* password */}
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
                        {/* button */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 hover:bg-pink-700 duration-200 text-white px-4 py-1 border rounded'>Login</button>
                            <div>Not registered{" "}<Link to="SignUp/" className='underline text-blue-500 cursor-pointer'>Signup</Link>{" "}</div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
