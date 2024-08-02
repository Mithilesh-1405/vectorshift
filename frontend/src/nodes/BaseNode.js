// BaseNode.js
import { Handle, Position } from 'reactflow';
import PropTypes from 'prop-types';

import '../css/Basestyle.css';
const BaseNode = ({ id, label, content, handles }) => {
    const handleSpacing = 20; 
    const handleStyle = (index) => ({
        position: 'absolute',
        left: '-110px', 
        top: `${handleSpacing * (index)}px`,
        textAlign: 'right',
        whiteSpace: 'nowrap',
        width: '100px', 
    });

    return (
        <div className='nodestyle'>
            < div >
                <span style={{ fontWeight: 'bold', padding: '8px' }}>{label}</span>
            </div >
            <div style={{ width: '100%', background: 'black', height: '1px' }}></div>
            <div style={{ padding: '5px' }}>
                {content}
            </div>
            {
                handles.map((handle, index) => (
                    <div key={handle.id}>
                        <Handle
                            key={handle.id}
                            type={handle.type}
                            position={handle.position}
                            id={`${id}-${handle.id}`}
                            style={{
                                ...handle.style,
                                backgroundColor: '#9e9de1'

                            }}

                        />
                        <span style={handleStyle(index)}>{handle.variable}</span>

                    </div>

                ))
            }
        </div >
    );
};

BaseNode.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    handles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['source', 'target']).isRequired,
        position: PropTypes.oneOf(Object.values(Position)).isRequired,
        style: PropTypes.object,
        variable: PropTypes.string.isRequired
    })).isRequired,
};

export default BaseNode;
