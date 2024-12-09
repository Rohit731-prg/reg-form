import React, { useState } from 'react';
import '../App.css';

function From() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alertSms, setAlertSms] = useState('');
    const [isSave, setIsSave] = useState(false);

    const handleCheck = () => {
        if (name === '' || phone === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill all the fields');
            return;
        }

        if (password.length < 8 || confirmPassword.length < 8) {
            setAlertSms('Password should be at least 8 characters');
            return;
        }

        if (password !== confirmPassword) {
            setAlertSms('Passwords do not match');
            return;
        }

        alert('Registration successful');
        setAlertSms('');
        setIsSave(true);
    };

    return (
        <div className="content">
            <h4>Full Name</h4>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h4>Phone Number</h4>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <h4>Email ID</h4>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h4>Password</h4>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <h4>Confirm Password</h4>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <p>{alertSms}</p>
            <button onClick={handleCheck}>Register</button>
            {isSave ? 
                <div className="show-data">
                    <p>Name: {name}</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                </div> : null}
        </div>
    );
}

export default From;
