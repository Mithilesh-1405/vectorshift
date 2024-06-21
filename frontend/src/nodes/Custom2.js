// CustomNode2.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
export const CustomNode2 = ({ id, data }) => {
    const content = (
        <div>
            <span>Custom Node 2</span>
        </div>
    );

    const handles = [
        { id: 'input1', type: 'target', position: Position.Left, style: { top: '25%' } },
        { id: 'input2', type: 'target', position: Position.Left, style: { top: '50%' } },
        { id: 'output1', type: 'source', position: Position.Right },
    ];

    return <BaseNode id={id} label="Custom Node 2" content={content} handles={handles} />;
};

export default CustomNode2;
