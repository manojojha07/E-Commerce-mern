import React, { useState } from 'react';
import { login_Admin } from '../api/login';
import { toast } from 'react-toastify';
import axios from 'axios';








const Login = ({ setToken }) => {
    const [email, setEmail] = useState('admin@forever.com');
    const [password, setPassword] = useState('qwerty123');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await login_Admin(email, password);

            if (response.success) {            
                setToken(response.token);        
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.error("Login Failed:", error.message || error);
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white s p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Admin Panel</h1>

                <div className="space-y-4" >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder='Enter your Email '
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password '
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 w-full mb-6 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        type="submit"
                        className="w-full bg-blue-500 text-white duration-500
                         py-2 rounded-md hover:bg-blue-900 transition"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
