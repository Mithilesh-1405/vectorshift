// CustomNode1.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
export const CustomNode1 = ({ id, data }) => {
    const content = (
        <div>
            <label>
                Custom1:
            </label>
        </div>
    );

    const handles = [
        { id: 'input1', type: 'source', position: Position.Left },
        { id: 'output1', type: 'source', position: Position.Right },

    ];

    return <BaseNode id={id} label="Custom Node 1" content={content} handles={handles} />;
};

export default CustomNode1;
