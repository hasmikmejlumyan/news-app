import { useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

// Shared
import DefaultModal from '../../Shared/DefaultModal';

// Hooks
import useOnClickOutside from "../../../Hooks/useOnClickOutside";

// Types
import { IRegistration } from "../../../types/registration";


const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IRegistration>();

    const [searchParams, setSearchParams] = useSearchParams();
    const ref = useRef<HTMLDivElement>(null);

    const action = String(searchParams.get('query'));
    const visible = /^(registration)$/i.test(action);

    const onSubmit: SubmitHandler<IRegistration> = data => {
        console.log(data, 'data');  //TODO remove after creating the logic
    }

    const clickOutsideHandler = () => {
        setSearchParams();
    };

    useOnClickOutside(ref, clickOutsideHandler);


    return (
        <>
            <Link to={'/homepage/?query=registration'}>Register</Link>

            <DefaultModal title='Registration' visible={visible} refOutSide={ref}>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div className='form-content'>
                        <label htmlFor='name' className='form-content__label'>Name</label>
                        <input
                            id='name'
                            className='form-content__input'
                            {...register('name', {
                                required: 'Name is a required field',
                                validate: value => value.trim().length > 0 || 'Name is a required field',
                                pattern: {
                                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                    message: 'Please enter a valid name',
                                }
                            })}
                        />
                        {errors.name && <span className='error-message'>{errors?.name.message}</span>}
                    </div>

                    <div className='form-content'>
                        <label htmlFor='lastname' className='form-content__label'>Lastname</label>
                        <input
                            id='lastname'
                            className='form-content__input'
                            {...register('lastname', {
                                required: 'Lastname is a required field',
                                validate: value => value.trim().length > 0 || 'Lastname is a required field',
                                pattern: {
                                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                    message: 'Please enter a valid Lastname',
                                }
                            })}
                        />
                        {errors.lastname && <span className='error-message'>{errors?.lastname.message}</span>}
                    </div>

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
                        {errors.email && <span className='error-message'>{errors?.email.message}</span>}
                    </div>

                    <div className='form-content'>
                        <label htmlFor='password' className='form-content__label'>Password</label>
                        <input
                            type='password'
                            id='password'
                            className='form-content__input'
                            {...register('password', {
                                required: 'Password is a required field',
                                validate: value => value.trim().length > 0 || 'Password is a required field',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters',
                                }
                            })}
                        />
                        {errors.password && <span className='error-message'>{errors?.password.message}</span>}
                    </div>

                    <div className='form-content'>
                        <label htmlFor='confirm_password' className='form-content__label'>Confirm password</label>
                        <input
                            type='password'
                            id='confirm_password'
                            className='form-content__input'
                            {...register('confirm_password', {
                                required: 'Confirm password is a required field',
                                validate: value => watch().password === value || 'The password confirmation does not match',
                            })}
                        />
                        {errors.confirm_password && <span className='error-message'>{errors?.confirm_password.message}</span>}
                    </div>

                    <button className='form-btn'>Sign Up</button>
                </form>
            </DefaultModal>
        </>
    )
};

export default Registration;