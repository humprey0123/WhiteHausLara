import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className='inset-0 flex items-center justify-center fixed backdrop-blur-xs z-50'>
            <div className='bg-black p-4 rounded-md shadow-lg'>
                {children}
            </div>

        </div>
    )
}