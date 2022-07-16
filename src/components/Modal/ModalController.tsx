import React, { useState } from 'react';
import GenericModal from './GenericModal';

export const ModalContext = React.createContext({
    showModal: false,
    setShowModal: (_show: boolean) => {},
});

type Props = {
    children: React.ReactNode;
};

const ModalController: React.FC<Props> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && (
                <GenericModal title="Hello from Modal" onClose={() => setShowModal(false)}>
                    <p>This is a cool modal!</p>
                </GenericModal>
            )}

            <ModalContext.Provider value={{ showModal, setShowModal }}>{children}</ModalContext.Provider>
        </>
    );
};

export default ModalController;
