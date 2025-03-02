import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { useParams ,useLocation} from "react-router-dom";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("c");
  const [output, setOutput] = useState("");
  const {username} = useParams()
  const location = useLocation()
  const [Description,setDescription] = useState()

  const {description,input,outputt} = location.state

  console.log(`${description}  ${input} ${output}`)


  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0b0f17] text-white">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-900 p-4">
        <h2 className="text-xl font-bold text-cyan-400">Code Editor{username}</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>

      {/* Code Editor */}
      <div className="flex-1 p-4">
        <Editor
          height="70vh"
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

      {/* Bottom Panel */}
      <div className="bg-gray-900 p-4">
        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">
          Run Code
        </button>
      </div>

      {/* Output Console */}
      <div className="bg-gray-800 p-4 h-40 overflow-auto">
        <h3 className="text-lg font-bold text-cyan-400">Output</h3>
        <pre className="text-gray-300">{output || "No output yet..."}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
