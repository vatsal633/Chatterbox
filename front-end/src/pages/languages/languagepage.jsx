import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LanguagePage = () => {  
    const { language } = useParams();  
    const navigate = useNavigate();

    // Supported languages
    const supportedLanguages = ["c", "cpp", "python", "javascript"];

    // Topics for each language
    const topics = {
        c: ["Variables", "Loops", "Functions", "Pointers", "Structures"],
        cpp: ["OOP", "STL", "Inheritance", "Polymorphism", "Templates"],
        python: ["Lists", "Dictionaries", "Functions", "OOP", "Decorators"],
        javascript: ["DOM", "ES6", "Async/Await", "Closures", "Prototypes"],
    };

    useEffect(() => {
        if (!supportedLanguages.includes(language)) {
            navigate("/404", { replace: true }); // Redirect if not valid
        }
    }, [language, navigate]);

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 p-6 space-y-4">
                <h2 className="text-xl font-bold text-cyan-400">Topics</h2>
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
            <div className="flex-1 flex flex-col items-center justify-center p-10">
                <div className="w-full max-w-3xl p-6 bg-gray-800 bg-opacity-60 rounded-2xl shadow-lg backdrop-blur-md text-center">
                    <h1 className="text-4xl font-extrabold text-cyan-400 uppercase">
                        Practice {language}
                    </h1>
                    <p className="text-lg text-gray-300 mt-4">
                        Start coding in <span className="font-bold text-cyan-300">{language}</span> here...
                    </p>

                    {/* Code Editor Placeholder */}
                    <div className="mt-6 bg-gray-700 rounded-xl p-4 text-left text-gray-300">
                        <pre className="overflow-x-auto">
                            <code className="text-sm">
                                // Write your {language} code here... {"\n"}
                                print("Hello, World!")  {/* Example */}
                            </code>
                        </pre>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-6">
                        <button 
                            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-md transition-all duration-200"
                            onClick={() => navigate("/practice")}
                        >
                            Go Back
                        </button>
                        <button 
                            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition-all duration-200"
                        >
                            Run Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguagePage;
