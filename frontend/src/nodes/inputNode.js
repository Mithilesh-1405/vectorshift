// InputNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
import '../css/Basestyle.css';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'Name '));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const content = (
    <div >
      <div className='container font_size margin'>
        <label className='textLabel'>Name</label>
        <div >
          <input className='text expanding-input' value={currName} onChange={handleNameChange}></input>
        </div>
      </div>
      <div className='container font_size margin ' >
        <label className='textLabel'>Type</label>
        <div >
          <select
            value={inputType}
            onChange={handleTypeChange}
            style={{
              border: 'none',
              outline: 'none',
              marginTop: '5px',
              backgroundColor: '#FFFFFF',
            }}
            className="font_size"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>

    </div >

  );

  const handles = [
    { id: 'value', type: 'source', position: Position.Right },
  ];

  return <BaseNode id={id} label="Input" content={content} handles={handles} />;
};

export default InputNode;
