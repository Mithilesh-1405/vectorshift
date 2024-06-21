// BaseNode.js
import { Handle, Position } from 'reactflow';
import PropTypes from 'prop-types';
// import { Position } from 'reactflow';
const BaseNode = ({ id, label, content, handles }) => {
    return (
        <div style={{
            minWidth: 300, minHeight: 100, borderRadius: '10px', border: '3px solid #9e9de1', backgroundColor: '#FFFFFF'
        }}>

            < div >
                <span style={{ fontWeight: 'bold', padding: '8px' }}>{label}</span>
            </div >
            <div style={{ width: '100%', background: 'black', height: '1px' }}></div>
            <div style={{ padding: '5px' }}>
                {content}
            </div>
            {
                handles.map(handle => (
                    <Handle
                        key={handle.id}
                        type={handle.type}
                        position={handle.position}
                        id={`${id}-${handle.id}`}
                        style={{
                            ...handle.styles,
                            backgroundColor: '#9e9de1'

                        }}
                    />
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
    })).isRequired,
};

export default BaseNode;
