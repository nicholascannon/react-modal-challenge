import './Modal.css';

type PropTypes = {
    children: React.ReactNode;
    onClose: () => unknown;
};

const Modal: React.FC<PropTypes> = ({ children, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-header">
                <button onClick={onClose}>x</button>
            </div>
            <div className="modal-content">{children}</div>
        </div>
    );
};

export default Modal;
