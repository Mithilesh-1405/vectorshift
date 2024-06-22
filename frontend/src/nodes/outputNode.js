// OutputNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
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
            value={outputType}
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
    { id: 'value', type: 'target', position: Position.Left },
  ];

  return <BaseNode id={id} label="Output" content={content} handles={handles} />;
};

export default OutputNode;
