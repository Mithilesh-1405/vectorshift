// TextNode.js
import { useState, useEffect } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
export const TextNode = ({ id, data }) => {

  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([
    { id: 'output', type: 'source', position: Position.Right },
  ]);
  const textarea = document.querySelector('.expanding-input');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const variablePattern = /\{\{\s*([^}]+)\s*\}\}/g;
    const matches = [...currText.matchAll(variablePattern)].map(match => match[1].trim());

    const newHandles = matches.map((variable, index) => ({
      id: `handle-${variable}`,
      type: 'target',
      position: Position.Left,
      style: {
        top: `${30 * (index + 20)}px`, // Adjust the top position as needed
        backgroundColor: '#9e9de1'
      }
    }));

    setHandles([
      { id: 'output', type: 'source', position: Position.Right },
      ...newHandles,
    ]);
  }, [currText]);

  textarea?.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });

  const content = (
    <div className='container font_size'>
      <label className='textLabel'>Text</label>
      <div >
        <textarea className='text expanding-input' value={currText} onChange={handleTextChange}></textarea>
      </div>
    </div>
  );


  return <BaseNode id={id} label="Text" content={content} handles={handles} />;
};

export default TextNode;
