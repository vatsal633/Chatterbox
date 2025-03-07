import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useParams, useLocation } from "react-router-dom";
import Code from "../assets/code.svg"
import { GoogleGenerativeAI } from "@google/generative-ai"
import axios from "axios";

const CodeEditor = () => {
  const [code, setCode] = useState("");//store the code entered by user
  const { language } = useParams()//detect which lang user choosed from url
  const { username } = useParams();
  const location = useLocation();//to get info sent by language.jsx

  //states for storing the important info for code question
  const [question, setQuestion] = useState("")
  const [description, setDescription] = useState("");
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [Language,setLanguage] = useState("")


  //loading the states like question des input output sent by language.jsx 
  useEffect(() => {
    if (location.state) {
      const { description, input, output, question } = location.state;
      setDescription(description);
      setInput(input);
      setOutput(output);
      setQuestion(question)
    }
  }, [location.state]);


  //set all the code enterd by user in newcode state
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };


  //code submit and checking logic
  const apikey = import.meta.env.VITE_GEMINI_API_KEY//import the api key
  const GenAI = new GoogleGenerativeAI(apikey)


  //function to hadle submit code for checking to ai
  const handleOnSubmit = async () => {
    try {
      if (code == '') {
        console.log("enter some thing")
      }
      else {
        let prompt = `${question} this is and this ${input} and ${output} of the question tell me my code this: ${code} is correct or some thing else like any charechtar according to input and output if yes than return only true else return only false if syntex error return false and return right code dont give me code dont give any thing just true or false`

        const model = GenAI.getGenerativeModel({ model: "gemini-1.5-flash" })//init model
        const response = await model.generateContent(prompt)

        const text = response.response.candidates[0].content.parts[0].text.trim() || "No response received."

        console.log(text)

        if (text === "true") {  // Check against the string "true"
          handleUpdateState();//calling the function to update statistics
        } else {
          alert('Your code is incorrect');
        }
        
      }

    } catch (err) {
      console.log("error while submiting the code")
    }
  }


  //this fucntion handle the user statistics when user submit the right question and update the user statistics
  const handleUpdateState = async () => {
    try {
        let solved_question = 0;

        solved_question += 1
        console.log("🔍 Sending Request with:", { username, solved_question });

        let response = await axios.post(`http://localhost:3000/states/${username}/update-states`, {
            username,
            solved_question
        });

        if (response.status === 200 || response.status === 201) {
            console.log('✅ States updated successfully:', response.data);
        }
    } catch (err) {
        console.error("❌ Error while connecting:", err.response?.data || err.message);
    }
};


  //function for run the code in editor
  const handlerun = async () => {
    try {
      let prompt = `what is the output of this question ${question} if the input is ${input} give me only output dont give anything just output`
      const model = GenAI.getGenerativeModel({ model: "gemini-1.5-flash" })
      const response = await model.generateContent(prompt)
      const text = response.response.candidates[0].content.parts[0].text || "No response received."

      console.log(text)

    } catch (err) {
      console.log("facing some issue wile run the programm", err)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-[#212426] text-white">
      {/* Header */}
      <div className="flex justify-between items-center bg-[#212426] p-4 ">
        <h2 className="text-xl font-bold text-cyan-400">
          Code Editor
        </h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>

      {/* Main Section */}
      <div className="flex h-full ">
        {/* Left Panel - Question, Input, Output */}
        <div className="w-1/2 p-4 space-y-4 border-r border-gray-700 h-[100%] ">

          <div className="p-4 bg-[#191b1c] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-cyan-400">Question</h3>
            <p className="mt-2 text-gray-300">{question || "No description available."}</p>
          </div>


          <div className="p-4 bg-[#191b1c] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-cyan-400">Description</h3>
            <p className="mt-2 text-gray-300">{description || "No description available."}</p>
          </div>

          <div className="p-4 bg-[#191b1c] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-cyan-400">Input</h3>
            <pre className="mt-2 text-gray-300">{input || "No input provided."}</pre>
          </div>

          <div className="p-4 bg-[#191b1c] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-cyan-400">Expected Output</h3>
            <pre className="mt-2 text-gray-300">{output || "No expected output."}</pre>
          </div>

        </div>


        {/* code editor */}
        <div className="w-1/2 flex flex-col bg-[#191b1c]">
          {/* <div className="text-green"><img src={Code} width={12} alt="" /></div> */}
          <div className="flex p-3  ">
            <div className="text-3xl">{language}</div>
          </div>
          <Editor
            height="100%"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={handleCodeChange}
            options={{
              fontSize: 16,
              minimap: { enabled: false },
              wordWrap: "on",
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="bg-gray-900 p-4 flex justify-between">
        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-semibold transition" onClick={handlerun}>
          Run Code
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold transition" onClick={handleOnSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
