import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import TextField from "../ui/TextField";
import signinSchema from "../validations/signinValidation";
import { useAuth } from "../store/auth-context";


const Signin = () => {
    const { signin, err } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signinSchema)
    });
    console.log(register);

    const submitForm = async (data) => {
        console.log('here');
        try {
            setError('');
            setIsloading(true);
            await signin(data);
            navigate('/')

        } catch (error) {
            setError('Failed to sign in');
        }
    }

    return (<form onSubmit={handleSubmit(submitForm)}>
        <h2>Sign in</h2>
        {error ? <p className="error-text">{error}</p> : ''}
        {err ? <p className="error-text">{err.message}</p> : ''}
        <label htmlFor="email">user email: </label>
        <input
            // styles={emialInputStyles}
         
            id='email'
            type='email'
            {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

<label htmlFor="password">password: </label>
        <input
            // styles={passwordInputStyles}
          
            type="password"
            id="password"
           {...register("password")}
        />
        {errors.password && <p >{errors.password.message}</p>}

        <button disabled={isLoading} type="submit">Sign In</button>
        <Link to="/auth/signup">Create Account</Link>
    </form>
    );
}
export default Signin;