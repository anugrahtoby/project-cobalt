"use client";
import React from "react";
import "./Coursepage.scss";
import  { useState } from "react";
export const Course = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleFrameClick = (index) => {
    setSelectedButtonIndex(index === selectedButtonIndex ? null : index);
  };

  return (
    <div className="courses-expanded">
      <div className="text-wrapper">Getting Started</div>

      <div className="div">Data Types in Python</div>
      <p className="data-types-are-the">
        <span className="span">
          Data types are the classification or categorization of data items. It represents the kind of value that tells
          what operations can be performed on a particular data. Since everything is an object in{" "}
        </span>
        <a href="https://www.geeksforgeeks.org/python-programming-language/" rel="noopener noreferrer" target="_blank">
          <span className="text-wrapper-2">Python programming</span>
        </a>
        <span className="span">
          , data types are actually classes and variables are instances (object) of these classes. The following are the
          standard or built-in data types in Python:
          <br />
          Numeric
          <br />
          Sequence Type
          <br />
          Boolean
          <br />
          Set
          <br />
          Dictionary
          <br />
          Binary Types({" "}
        </span>
        <a href="https://www.geeksforgeeks.org/memoryview-in-python/" rel="noopener noreferrer" target="_blank">
          <span className="text-wrapper-2">memoryview</span>
        </a>
        <span className="span">, </span>
        <a href="https://www.geeksforgeeks.org/python-bytearray-function/" rel="noopener noreferrer" target="_blank">
          <span className="text-wrapper-2">bytearray</span>
        </a>
        <span className="span">, </span>
        <a href="https://www.geeksforgeeks.org/python-bytes-method/" rel="noopener noreferrer" target="_blank">
          <span className="text-wrapper-2">bytes</span>
        </a>
        <span className="span">)</span>
      </p>
      <div className="rectangle" />
      <div className="frame">
        <p className="p">The Joy of Computing using Python</p>
      </div>
      <div className="DK-chapter-list">
        <div className="frame-2">
        <div className={`frame-3 ${selectedButtonIndex === 0 ? 'clicked' : ''}`} onClick={() => handleFrameClick(0)}>
            <div className="rectangle-2" />
            <div className="frame-4">
              <div className="text-wrapper-6">Getting Started</div>
              <div className="frame-5">
                <div className="ellipse-2" />
              </div>
            </div>
          </div>
        </div>
        <div className='frame-11'>
        <div className={`frame-10 ${selectedButtonIndex === 1 ? 'clicked' : ''}`} onClick={() => handleFrameClick(1)}>
            <div className="rectangle-3" />
            <div className="frame-4">
              <div className="text-wrapper-15">Getting Started</div>
              <div className="frame-5">
                <div className="ellipse-8" />
              </div>
            </div>
          </div>
        </div>
        <div className='frame-12'>
        <div className={`frame-13 ${selectedButtonIndex === 2 ? 'clicked' : ''}`} onClick={() => handleFrameClick(2)}>
            <div className="rectangle-4" />
            <div className="frame-4">
              <div className="text-wrapper-16">Getting Started</div>
              <div className="frame-5">
                <div className="ellipse-9" />
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="text-wrapper-7">Cobalt.</div>
      <img className="img" alt="Vector" src="vector-4-2.svg" />
      <div className="DK-text-button">
        <div className="text-wrapper-8">Course Materials</div>
      </div>
      
    </div>
  );
};

export default Course;