import React, { useEffect, useState } from 'react';
import '../assets/css/Login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

       // Mock API call
    try {
        const response = await axios.post('/api/token/', {
            email: email,
            password: password
        });
        if (response.status === 200) {
            localStorage.setItem('auth', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            localStorage.setItem('email', email);
            localStorage.setItem('role', response.data.role);
            toast.success('Login successful');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            setError('Login failed. Please try again.');
            toast.error('Login failed. Please try again.');
        }
    } catch (err) {

        setError('Login failed. Please try again.');
        toast.error('Login failed. Please try again.');
    } finally {
        setLoading(false);
    }
    };

    return (
        <div className='login-page'>
            <div className="login-container">
                <div className="login-box">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="kpmglogo.png" alt="KPMG Logo" className="logo" style={{ background: "blue" }} />
                        <span style={{ marginLeft: '10px', fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>Proposal Pilot</span>
                    </div>
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'blue', marginTop: '20px' }}>Login</h1>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
