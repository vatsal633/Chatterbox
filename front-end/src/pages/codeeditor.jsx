import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useParams, useLocation } from "react-router-dom";
import Code from "../assets/code.svg"

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const {language} = useParams()
  const { username } = useParams();
  const location = useLocation();


  const [question, setQuestion] = useState("")
  const [description, setDescription] = useState("");
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (location.state) {
      const { description, input, output, question } = location.state;
      setDescription(description);
      setInput(input);
      setOutput(output);
      setQuestion(question)
    }
  }, [location.state]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className="flex flex-col h-screen bg-[#212426] text-white">
      {/* Header */}
      <div className="flex justify-between items-center bg-[#212426] p-4 ">
        <h2 className="text-xl font-bold text-cyan-400">
          Code Editor {username ? `- ${username}` : ""}
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
        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-semibold transition">
          Run Code
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
