import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../ui/TextField";
import { useAuth } from "../store/auth-context";
import { yupResolver } from "@hookform/resolvers/yup";
import signupSchema from "../validations/signupValidation";
import { useForm } from "react-hook-form";

const Signup = () => {
    const { signup, err } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema)
    });

    const submitForm = async (data) => {
        const dataToSignup={
            username:data.username,
            email:data.email,
            password:data.password
        }
        console.log(data);
        try {
            setError('');
            setIsloading(true);
            await signup(dataToSignup);
            navigate('/')

        } catch (error) {
            setError('Failed to sign in');
        }
    }

    return (<form onSubmit={handleSubmit(submitForm)}>
        <h2>Sign up</h2>
        {error ? <p className="error-text">{error}</p> : ''}
        {err ? <p className="error-text">{err.message}</p> : ''}
        <label htmlFor="username">Username: </label>
        <input
            // styles={usernameInputStyles}

            id="username"
            type="text"
            {...register("username")}
        />
 {errors.username && <p>{errors.username.message}</p>}
        <label htmlFor="email">email: </label>
        <input
            // styles={emialInputStyles}
            label="User email"
            id='email'
            type='email'
            {...register("email")}

        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password: </label>
        <input
            // styles={passwordInputStyles}

            type="password"
            id="password"
            {...register("password")}
        />
        {errors.password && <p className="login__errors">{errors.password.message}</p>}
        <label htmlFor="confirmPass">Repeat password: </label>
        <input
            // styles={passwordInputStyles}

            type="password"
            id="confirmPass"
            {...register("confirmPass")}
        />
        {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
        <button disabled={isLoading} type="submit">Sign Up</button>
        <p>Alredy have an account?</p>
        <Link to="/auth/signin">Sign In</Link>
    </form>
    );
}

export default Signup;