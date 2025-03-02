import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, Stethoscope } from "lucide-react";
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'


const LanguagePage = () => {


    const { language } = useParams();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [topic, setTopic] = useState('');
    const [questions, setQuestion] = useState([]);
    const [generate, setGenerate] = useState(false)
    const [everyquestion, seteveryquestion] = useState([])
    const [everydesc,setEverydesc] = useState([])
    const [everyinput,setEveryinput] = useState([])
    const [everyoutput,setEveroutput] = useState([])


    const supportedLanguages = ["c", "cpp", "python", "javascript"];
    const topics = {
        c: ["DMA", "Controll statement", "Arrays & String", "Loops", "Functions", "Pointers", "Structures"],
        cpp: ["OOP", "STL", "Inheritance", "Polymorphism", "Templates"],
        python: ["Lists", "Dictionaries", "Functions", "OOP", "Decorators"],
        javascript: ["DOM", "ES6", "Async/Await", "Closures", "Prototypes"],
    };

    //ai generation logic



    //handle wrong language
    useEffect(() => {
        if (!supportedLanguages.includes(language)) {
            navigate("/404", { replace: true });
        }
    }, [language, navigate]);
    const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);



    //ai generated questions login here
    // dotenv.config()
    const apikey = import.meta.env.VITE_GEMINI_API_KEY//import the api key
    const GenAI = new GoogleGenerativeAI(apikey)



    //read the topic from side bar when user click on it to to send the AI which topic question to display
    const read = (topic) => {
        setTopic(topic)
        console.log(topic)
    }




    const generateQuestion = async () => {
        try {

            console.log("Generating question for topic:", topic);

            let prompt = `Generate five practice questions for "${topic} in ${language}" in JSON format. Each question should have these fields:
        {
            "question": "The actual question text.",
            "description": "A brief explanation of the concept behind the question.",
            "input": "Example input values.",
            "output": "Expected output."
        }
        Return only a JSON array without any extra text or formatting and dont repeat questions.`;//making frame of the question
            const model = GenAI.getGenerativeModel({ model: "gemini-1.5-flash" })//init model
            const response = await model.generateContent(prompt)//pasing the question



            const text = response.response.candidates[0].content.parts[0].text || "No response received."


            let newtext = text.replace(/```json|```/g, "").trim();
            const parsedQuestions = JSON.parse(newtext);
            console.log(newtext)





            //storing  the josn question in state
            setGenerate(true)
            setQuestion(parsedQuestions)






        } catch (err) {
            console.log(`error while generating question:${err}`)
        }
    }


    useEffect(() => {
        if (questions.length > 0) {
            seteveryquestion(questions.map(q => q.question));
            setEverydesc(questions.map(q=>q.description))
            setEveryinput(questions.map(q=>q.input))
            setEveroutput(questions.map(q=>q.output))
        }
    }, [questions]);

    const showdesc = ()=>{
        console.log(everydesc)
    }


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

                {/* displaying topic of  */}
                <ul className="space-y-2">
                    {topics[language]?.map((topic, index) => (
                        <li
                            key={index}
                            className="p-2 bg-gray-700 rounded-lg hover:bg-cyan-600 transition-all duration-200 cursor-pointer"
                            onClick={() => read(topic)}
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
                        onClick={generateQuestion}
                    >
                        Generate AI Question
                    </button>
                    <button
                        className=" px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                        onClick={showdesc}
                    >
                        showdesc
                    </button>

                </div>
                <div className="flex flex-col items-center min-h-screen p-6">

                    
                    {everyquestion.map((value, index) => (
                        <div
                            key={index}
                            className="bg-[#111317] w-full max-w-2xl flex justify-between items-center p-6 rounded-md border border-gray-700 mb-4 shadow-md flex-col"
                        >
                            <div>

                                <h3 className="text-lg font-semibold">Question {index + 1}</h3>
                            </div>
                            <div className="flex">

                                <p className="text-gray-300">{value}</p> {/* Display the actual question */}
                                <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all">
                                    Solve Question
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguagePage;
