// CustomNode4.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
export const CustomNode4 = ({ id, data }) => {
    const content = (
        <div>
            <span>Custom Node 4</span>
        </div>
    );

    const handles = [
        { id: 'input1', type: 'target', position: Position.Left },
        { id: 'output1', type: 'source', position: Position.Right },
    ];

    return <BaseNode id={id} label="Custom 4" content={content} handles={handles} />;
};

export default CustomNode4;
