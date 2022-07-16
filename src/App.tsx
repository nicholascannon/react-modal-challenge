import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="App">
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2>Hello from modal!</h2>
                </Modal>
            )}
            <h1>React modal challenge</h1>

            <button onClick={() => setShowModal(true)}>Show modal</button>
        </div>
    );
}

export default App;
