import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const LanguagePage = () => {
    const { language } = useParams();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const supportedLanguages = ["c", "cpp", "python", "javascript"];
    const topics = {
        c: ["Variables", "Loops", "Functions", "Pointers", "Structures"],
        cpp: ["OOP", "STL", "Inheritance", "Polymorphism", "Templates"],
        python: ["Lists", "Dictionaries", "Functions", "OOP", "Decorators"],
        javascript: ["DOM", "ES6", "Async/Await", "Closures", "Prototypes"],
    };

    useEffect(() => {
        if (!supportedLanguages.includes(language)) {
            navigate("/404", { replace: true });
        }
    }, [language, navigate]);

    const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
            {/* Sidebar Toggle Button (Mobile) */}
            <button
                className="md:hidden p-4 text-cyan-400 focus:outline-none flex justify-end"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <Menu size={28} />
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 w-64 bg-gray-800 p-6 space-y-4 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 transition-transform duration-300 ease-in-out md:block max-[768px]:w-full z-10`}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-cyan-400 inline">Topics</h2>
                    <button
                        className="md:hidden p-4 text-cyan-400 focus:outline-none flex justify-end"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
                <ul className="space-y-2">
                    {topics[language]?.map((topic, index) => (
                        <li
                            key={index}
                            className="p-2 bg-gray-700 rounded-lg hover:bg-cyan-600 transition-all duration-200 cursor-pointer"
                        >
                            {topic}
                        </li>
                    ))}
                </ul>
            </aside>



            {/* Main Content */}
            <div className="bg-[#0b0f17] w-full flex flex-col">
                {/* Main Section Header */}
                <div className="bg-[#111317] p-5 border-b border-gray-700">
                    <h2 className="text-2xl">{capitalize(language)}</h2>
                </div>

                {/* Question Section */}
                <div className=" flex justify-center mt-4">
                    <button
                        className=" px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                    >
                        Generate AI Question
                    </button>
                </div>
                <div className="flex flex-col items-center min-h-screen p-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#111317] w-full max-w-2xl flex justify-between items-center p-6 rounded-md border border-gray-700 mb-4 shadow-md"
                        >
                            <h3 className="text-lg font-semibold">Question {index + 1}</h3>
                            <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all">
                                Solve Question
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguagePage;
