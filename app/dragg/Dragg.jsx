"use client";
import React from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './Dragg.scss';

const DropZone = ({ title, onDrop, items }) => {
  const [, drop] = useDrop({
    accept: 'ELEMENT',
    drop: (item) => {
      onDrop(item.text);
    },
  });

  return (
    <div className={`dropzone ${title.toLowerCase()}`} ref={drop}>
      <div className="text-wrapper-2">{title}</div>
      {items.map((item, index) => (
        <div key={index} className="dropped-item">
          <div className="text-wrapper-3">{item}</div>
        </div>
      ))}
    </div>
  );
};

const DraggableElement = ({ text, onDrop }) => {
  const [, drag] = useDrag({
    type: 'ELEMENT',
    item: { text },
  });

  return (
    <div ref={drag} className="div-wrapper draggable-element">
      <div className="text-wrapper-3">{text}</div>
    </div>
  );
};

const Drag = () => {
  const [primitiveItems, setPrimitiveItems] = React.useState([]);
  const [nonPrimitiveItems, setNonPrimitiveItems] = React.useState([]);

  const handleDrop = (text, type) => {
    if (type === 'primitive' && !primitiveItems.includes(text)) {
      setPrimitiveItems((prevItems) => [...prevItems, text]);
    } else if (type === 'non-primitive' && !nonPrimitiveItems.includes(text)) {
      setNonPrimitiveItems((prevItems) => [...prevItems, text]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="unrestricted-test">
        <div className="group-wrapper">
          <div className="group">
            <div className="div">
              <div className="frame">
                <div className="text-wrapper">Cobalt.</div>
                <p className="p">Sort the following according to their types</p>
              </div>
              <div className="frame-2">
                <div className="frame-3">
                  <DropZone title="Primitive" style={{ color: 'white' }} onDrop={(text) => handleDrop(text, 'primitive')} items={primitiveItems} />
                </div>
                <div className="frame-3">
                  <DropZone title="Non-Primitive" style={{ color: 'white' }} onDrop={(text) => handleDrop(text, 'non-primitive')} items={nonPrimitiveItems} />
                </div>
              </div>
              <div className="frame-5">
                <DraggableElement text="Integer" onDrop={handleDrop} />
                <DraggableElement text="Float" onDrop={handleDrop} />
                <DraggableElement text="Boolean" onDrop={handleDrop} />
                <DraggableElement text="Array" onDrop={handleDrop} />
                <DraggableElement text="Tuple" onDrop={handleDrop} />
                <DraggableElement text="Stack" onDrop={handleDrop} />
                <DraggableElement text="Character" onDrop={handleDrop} />
                <DraggableElement text="Queue" onDrop={handleDrop} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Drag;
