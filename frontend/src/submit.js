import { useStore } from './store';
import React, { useState, useEffect } from "react";

import { shallow } from 'zustand/shallow';
import "./css/Modal.css";

export const SubmitButton = () => {
    const [modal, setModal] = useState(false);
    const [isDAG, setDAG] = useState('')
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }), shallow);

    const handleSubmit = async () => {
        try {
            console.log("Nodes", nodes)
            console.log("Edges", edges)
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Data submitted successfully', result);
                setDAG(result.is_dag)
                toggleModal();

            } else {
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('Error submitting data', error);
        }
    };
    useEffect(() => {
        console.log(isDAG);
    }, [isDAG]);
    return (
        <div>
            <div className='flexCenter'>
                <button className='butn' type="button" onClick={handleSubmit}>Submit</button>
            </div>
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className='b1'>
                            {nodes.length > 0 ? 'Pipeline Submitted Successfully' : 'Please use atleast 1 Node'}
                        </div>
                        {nodes.length > 0 && (
                            <div className='b3'>
                                <table className="info-table">
                                    <tbody>
                                        <tr>
                                            <th>Number Of Nodes</th>
                                            <td>{nodes.length}</td>
                                        </tr>
                                        <tr>
                                            <th>Number Of Edges</th>
                                            <td>{edges.length}</td>
                                        </tr>
                                        <tr>
                                            <th>IsDAG</th>
                                            <td>{isDAG ? 'True' : 'False'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        <div className='b2'>
                            <button className="close-modal" onClick={toggleModal}>
                                &times;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
