import { useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

// Shared
import DefaultModal from '../../Shared/DefaultModal';

// Hooks
import useOnClickOutside from "../../../Hooks/useOnClickOutside";

// Types
import { ILogin } from "../../../types/login";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ILogin>();

    const [searchParams, setSearchParams] = useSearchParams();
    const ref = useRef<HTMLDivElement>(null);

    const action = String(searchParams.get('query'));
    const visible = /^(login)$/i.test(action);

    const onSubmit: SubmitHandler<ILogin> = data => {
        console.log(data, 'data');  //TODO remove after creating logic
    }

    const clickOutsideHandler = () => {
        setSearchParams();
    };

    useOnClickOutside(ref, clickOutsideHandler);


    return (
        <>
            <Link to={'/homepage/?query=login'}>Log in</Link>

            <DefaultModal title='Log In' visible={visible} refOutSide={ref}>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div className='form-content'>
                        <label htmlFor='email' className='form-content__label'>Email</label>
                        <input
                            id='email'
                            className='form-content__input'
                            {...register('email', {
                                required: 'Email is a required field',
                                validate: value => value.trim().length > 0 || 'Email is a required field',
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Please enter a valid email address',
                                }
                            })}
                        />
                        {errors.email && <span>{errors?.email.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                           type='password'
                           id='password'
                           {...register('password', {
                               required: 'Password is a required field',
                               validate: value => value.trim().length > 0 || 'Password is a required field',
                               minLength: {
                                   value: 6,
                                   message: 'Password must be at least 6 characters',
                               }
                           })}
                        />
                        {errors.password && <span>{errors?.password.message}</span>}
                    </div>

                    <input type='submit' />
                </form>
            </DefaultModal>
        </>
    )
};

export default Login;