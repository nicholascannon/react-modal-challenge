import { useContext } from 'react';
import './App.css';
import { ModalContext } from './components/Modal/ModalController';

function App() {
    const { setShowModal } = useContext(ModalContext);

    return (
        <div className="App">
            <h1>React modal challenge</h1>

            <button onClick={() => setShowModal(true)}>Show modal</button>
        </div>
    );
}

export default App;
