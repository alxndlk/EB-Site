"use client";


import { ReactNode } from 'react';

export const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    );
}
