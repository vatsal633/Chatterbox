import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { signinUser } from '../../apis/auth'; // api for signin

const Signin = () => {
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const BASEURL = import.meta.env.VITE_BACKEND_URL

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await signinUser(formData);
            console.log('Sign In Success:', response);
        } catch (err) {
            console.log('Sign In Error:', err);
            setError(err.message);
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1f1f1f] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#181818] p-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>

                <div className='text-red-400 text-center text-xl'>{error}</div>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            onChange={handleChange}
                            value={formData.username}
                            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm text-gray-400 mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-purple-500" />
                            <span>Remember me</span>
                        </label>
                        <button type="button" className="hover:underline text-purple-400">Forgot?</button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-2 px-4 rounded-md"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-400 text-sm">
                    Already have an account? <Link to='/login' className="text-purple-400 hover:underline cursor-pointer">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
