import React, {useState} from "react";
import { Link } from "react-navi";
import { onRegister } from "./Auth.api";
import { AuthForm } from "./Auth.components";


const RegisterPage = () => {

    const [{username, password, repeatPassword}, setRegisterData] = useState({
    username:'',
    password:'',
    repeatPassword:''
    })

    const [error, setError] = useState('')

    const register = async (event:React.FormEvent) => {
        event.preventDefault();
        if(password === repeatPassword) {
            //perform api call
            const response = await onRegister({
                username,
                password
            })
            if(response && response.error) {
                setError(response.error);
            }

        } else {
            setError('password and repeat password have to be equal');
        }

    }

    return (
        <AuthForm onSubmit={register}>
            <label htmlFor="username">Username</label>
            <input placeholder="username" value={username} onChange={(event) => setRegisterData({
                username:event.target.value,
                password,
                repeatPassword
            })} />
            <label htmlFor="password">Password</label>
            <input placeholder="password" value={password} onChange={(event) => setRegisterData({
                username,
                password:event.target.value,
                repeatPassword
            })} />
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input placeholder="repeat password" value={repeatPassword} onChange={(event) => setRegisterData({
                username,
                password,
                repeatPassword:event.target.value
            })} />
            <button type="submit">Register</button>
            {error.length > 0 && <p>{error}</p>}
            <p>already have an account? <Link href="/login">Login</Link></p>
        </AuthForm>
    )
}

export default RegisterPage;