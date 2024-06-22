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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button className='butn' type="button" onClick={handleSubmit}>Submit</button>
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Pipeline Results</h2>
                        <div>
                            <p>Number Of Nodes: {nodes.length}</p>
                            <p>Number Of Edges: {edges.length}</p>
                            <p>Is DAG: {isDAG ? 'Yes' : 'No'}</p>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
