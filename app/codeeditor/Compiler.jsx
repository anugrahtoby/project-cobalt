'use client';
import React from 'react'
import "./Compiler.scss";
import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { Button } from '@anugrahtoby/cobalt-complib';

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

const Compiler = () => {

    const [fileName, setFileName] = useState("main.py");
    const file =files[fileName];
  return (
    <div className="main">
        <button onClick={() => setFileName("index.html")}>
            html file
        </button>
        <button onClick={() => setFileName("main.py")}>
            python file
        </button>
        <Editor 
            width="100%"
            theme='vs-dark'
            defaultLanguage={file.language}
            path={file.name}
            defaultValue={file.value}
        />
    </div>
  )
}

export default Compiler