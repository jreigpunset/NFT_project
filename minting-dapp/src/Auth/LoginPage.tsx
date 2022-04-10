import { Navigation } from "navi";
import React, {useState } from "react";
import { render } from "react-dom";
import { Link } from "react-navi";
import {onLogin} from './Auth.api';
import { AuthForm } from './Auth.components';

const LoginPage = () => {

    const [{username, password}, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('');

    const login = async (event:React.FormEvent) => {
    event.preventDefault();
    const {error, token} = await onLogin({
        username,
        password
    })

        if(error) {
            setError(error);
        } else {
            /*navigation.setContext({token})
            navigation.navigate("/")*/
        }
    }

    return (
        
        <AuthForm onSubmit={login}>
            <label htmlFor="username">Username</label>
            <input placeholder="username" value={username} onChange={(event) => setCredentials({
                username:event.target.value,
                password
            })} />
            <label htmlFor="password">Password</label>
            <input placeholder="Password" value={password} onChange={(event) => setCredentials({
                username,
                password:event.target.value
            })} />
            <button type = "submit">Login</button>
            {error.length > 0 && <p>{error}</p>}
            <p>Need an account?<Link href="/register">Register now!</Link></p>
        </AuthForm>
        
    );


}

export default LoginPage;

