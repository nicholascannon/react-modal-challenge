import { useState } from 'react';
import Modal from './components/Modal';

import './App.css';

function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="App">
            {showModal && (
                <Modal title="Hello from Modal" onClose={() => setShowModal(false)}>
                    <p>This is a cool modal!</p>
                </Modal>
            )}
            <h1>React modal challenge</h1>

            <button onClick={() => setShowModal(true)}>Show modal</button>
        </div>
    );
}

export default App;
