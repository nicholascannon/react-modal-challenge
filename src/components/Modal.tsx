import './Modal.css';

type PropTypes = {
    children: React.ReactNode;
    title: string;
    onClose: () => unknown;
};

const Modal: React.FC<PropTypes> = ({ children, title, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-header">
                <h2>{title}</h2>
                <button className="modal-close" onClick={onClose}>
                    <img src="imgs/icons/close.svg" alt="Close Modal" />
                </button>
            </div>
            <div className="modal-content">{children}</div>
        </div>
    );
};

export default Modal;
