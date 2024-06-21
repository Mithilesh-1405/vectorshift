// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='custom1' label='Custom Node 1' />
                <DraggableNode type='custom2' label='Custom Node 2' />
                <DraggableNode type='custom3' label='Custom Node 3' />
                <DraggableNode type='custom4' label='Custom Node 4' />
                <DraggableNode type='custom5' label='Custom Node 5' />
            </div>
        </div>
    );
};
