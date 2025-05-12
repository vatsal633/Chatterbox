import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1f1f1f] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#181818] p-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
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
                       Log In
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-400 text-sm">
                    Don’t have an account? <span className="text-purple-400 hover:underline cursor-pointer">Register</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
