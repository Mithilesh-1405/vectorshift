import { useState, useEffect, useRef } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([
  ]);
  const textareaRef = useRef(null);

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
        top: `${10 + index * 30}px`, 
        backgroundColor: '#9e9de1'
      }
    }));

    setHandles([{ id: 'output', type: 'source', position: Position.Right }, ...newHandles]);
    console.log(handles)
  }, [currText]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      textarea?.addEventListener('input', handleInput);
      return () => {
        textarea?.removeEventListener('input', handleInput);
      };
    }
  }, []);

  const content = (
    <div className='container font_size'>
      <label className='textLabel'>Text</label>
      <div>
        <textarea
          ref={textareaRef}
          className='text expanding-input'
          value={currText}
          onChange={handleTextChange}
        ></textarea>
      </div>
    </div>
  );

  return <BaseNode id={id} label="Text" content={content} handles={handles} />;
};

export default TextNode;
