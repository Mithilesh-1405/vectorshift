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
      <div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }} >
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="custom-input font_size inputStyle"
          />
        </label>
      </div>
      <label style={{
        display: 'flex', alignItems: 'center', gap: '5px'
      }}>
        Type:
        <select
          value={inputType}
          onChange={handleTypeChange}
          style={{
            border: 'none',
            outline: 'none',
            marginTop: '5px',
            backgroundColor: '#FFFFFF',
          }}
          className="custom-select font_size"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </div >

  );

  const handles = [
    { id: 'value', type: 'source', position: Position.Right },
  ];

  return <BaseNode id={id} label="Input" content={content} handles={handles} />;
};

export default InputNode;
