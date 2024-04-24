import React, { useState } from "react";
const LoginComponent = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => {
        if (userName == 'admin' && password == 'admin'){
            alert("Login successfuly");
        }
        else {
            alert("Incorrect username or password");
        }
    }
    return(
    <div>
        <h1>
            Login to the system
        </h1>
        <table>
            <tr>
                <td> User name :</td>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <td>Password :</td>
                <td><input type="password" /></td>
            </tr>
            <tr>
                <td></td>
                <td><button onClick={handleClick}>Login</button></td>
            </tr>
        </table>
    </div>)
}
export default LoginComponent;