'use client';
import React from 'react'
import "./Compiler.scss";
import { Editor } from '@monaco-editor/react';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from "react";

const files ={
    "main.py": {
        name: "filename",
        language: "python",
        value: "def main():"

    },
    "index.html":
    {
        name: "filename",
        language: "html",
        value: "<head> </head>"
    }
}

const languages = [
      { name: 'Java', code: 'JV' },
      { name: 'Python', code: 'PY' },
      { name: 'C++', code: 'CPP' },
      { name: 'C', code: 'C' },
      { name: 'PHP', code: 'PHP' }
  ];

//   <select id="languages" class="languages" onchange={()=> setFileName()}>
//                 <option value="c"> C </option>
//                 <option value="java"> Java </option>
//                 <option value="c++"> C++ </option>
//             </select>

const Compiler = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const [fileName, setFileName] = useState("main.py");

    const file =files[fileName];

  return (
    <div className="main">
        <div className='dropdown'>
        <Dropdown value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.value)} options={languages} optionLabel="name" 
                    placeholder="Language" className="language" />
        </div>
        <div className='main'>
            <Editor 
                width="100%"
                theme='vs-dark'
                defaultLanguage={file.language}
                path={file.name}
                defaultValue={file.value}
            />
        </div>
    </div>
  )
}

export default Compiler