import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className='inset-0 flex items-center justify-center fixed backdrop-blur-xs z-50'>
            <div className='bg-black p-5 rounded-2xl shadow-lg'>
                {children}
            </div>

        </div>
    )
}