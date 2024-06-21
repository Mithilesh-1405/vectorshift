// CustomNode3.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const CustomNode3 = ({ id, data }) => {
    const content = (
        <div>
            <span>Custom Node 3</span>
        </div>
    );

    const handles = [
        { id: 'input1', type: 'target', position: Position.Left },
        { id: 'output1', type: 'source', position: Position.Right },
        // { id: 'output2', type: 'source', position: Position.Right, style: { top: '50%' } },
    ];

    return <BaseNode id={id} label="Custom Node 3" content={content} handles={handles} />;
};

export default CustomNode3;
