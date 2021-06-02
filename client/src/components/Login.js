import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
import { useHistory } from "react-router-dom";
import styles from "../styles/login.module.scss"
 
function Login(props) {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    
    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('http://localhost:5000/users/signin', { username: username.value, password: password.value })
        .then((response) => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            history.push('/dashboard');
        }).catch(error => {
            setLoading(false);
            if (error.response && error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    return (
        <form>
            <fieldset>
                <input type="text" name="username" {...username} autoComplete="new-password" required />
                <span className="bar"></span>
                <label>Username</label>
            </fieldset>
            <fieldset>
                <input type="password" name="password" {...password} autoComplete="new-password" required />
                <span className="bar"></span>
                <label>Password</label>
            </fieldset>
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
            {error && <small style={{color: 'red'}}>{error}</small>}
        </form>
        
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
   
  export default Login;