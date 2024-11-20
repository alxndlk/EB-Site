'use client';

import { TailSpin } from 'react-loader-spinner';

export default function Loading() {

    return (
        <div className='flex justify-center items-center h-screen bg-transparent bg-opacity-100 w-full absolute z-9999 opacity-100 transition-opacity duration-1000 ease-out flex-col gap-6'>
            <TailSpin color='white' width={50} height={50} radius={1} />
            Загрузка компонентов...
        </div>
    )
}