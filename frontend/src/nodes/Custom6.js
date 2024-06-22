// CustomNode6.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
export const CustomNode6 = ({ id, data }) => {
    const content = (
        <div>
            <span>Custom Node 6</span>
        </div>
    );

    const handles = [
        { id: 'input1', type: 'target', position: Position.Left },
        { id: 'output1', type: 'source', position: Position.Right },
    ];

    return <BaseNode id={id} label="Custom 6" content={content} handles={handles} />;
};

export default CustomNode6;
