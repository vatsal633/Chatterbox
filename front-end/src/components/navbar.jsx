import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 border-b border-gray-800">
            <h1 className="text-2xl font-bold text-cyan-400">ChatterBox</h1>
            <div className="space-x-4">
                <Link to="/login" className="text-gray-300 hover:text-white transition">
                    Login
                </Link>
                <Link
                    to="/chat"
                    className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md font-medium transition"
                >
                    Try Chat
                </Link>
            </div>
        </nav>
    )
}

export default Navbar