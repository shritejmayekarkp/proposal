import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        email: localStorage.getItem('email'),
        phone: '',
        address: ''
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch user data from API
        axios.get('/api/user/profile')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Update user data via API
        axios.put('/api/user/profile', user)
            .then(response => {
                setUser(response.data);
                setIsEditing(false);
            })
            .catch(error => {
                console.error('There was an error updating the user data!', error);
            });
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '10px',
        fontWeight: 'bold'
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer'
    };

    const editButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#28a745'
    };

    return (
        <div style={containerStyle}>
            <h1>Profile</h1>
            <div>
                <label style={labelStyle}>
                    Name:
                    {isEditing ? (
                        <input type="text" name="name" value={user.name} onChange={handleChange} style={inputStyle} />
                    ) : (
                        <span>{user.name}</span>
                    )}
                </label>
            </div>
            <div>
                <label style={labelStyle}>
                    Email:
                    {isEditing ? (
                        <input type="email" name="email" value={user.email} onChange={handleChange} style={inputStyle} />
                    ) : (
                        <span>{user.email}</span>
                    )}
                </label>
            </div>
            <div>
                <label style={labelStyle}>
                    Phone:
                    {isEditing ? (
                        <input type="text" name="phone" value={user.phone} onChange={handleChange} style={inputStyle} />
                    ) : (
                        <span>{user.phone}</span>
                    )}
                </label>
            </div>
            <div>
                <label style={labelStyle}>
                    Address:
                    {isEditing ? (
                        <input type="text" name="address" value={user.address} onChange={handleChange} style={inputStyle} />
                    ) : (
                        <span>{user.address}</span>
                    )}
                </label>
            </div>
            {isEditing ? (
                <button onClick={handleSave} style={buttonStyle}>Save</button>
            ) : (
                <button onClick={handleEdit} style={editButtonStyle}>Edit</button>
            )}
        </div>
    );
};

export default Profile;