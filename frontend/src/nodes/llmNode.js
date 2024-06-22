// LLMNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
export const LLMNode = ({ id, data }) => {
  const content = (
    <div>
      <span>This is a LLM.</span>
    </div>
  );

  const handles = [
    { id: 'system', type: 'target', position: Position.Left },
    { id: 'response', type: 'source', position: Position.Right },
    { id: 'prompt', type: 'source', position: Position.Top },
  ];

  return <BaseNode id={id} label="LLM" content={content} handles={handles} />;
};

export default LLMNode;
