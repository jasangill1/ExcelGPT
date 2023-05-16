import React from 'react';
import Image from 'next/image';
import FileUpload from './UpLoadFile';

export default function Sidebar() {
    return (
        <div className="relative w-[300px] h-full bg-black text-green-400 float-right text-center pt-10 font-mono">
            <h1 className="text-xl mb-5 font-mono flex justify-center items-center">
            <Image src="/images/excellGptIcon.png" alt="Excel Icon" width={50} height={50} />
                EXCELGPT
            </h1>
            <div className="mt-5">
                <FileUpload />
            </div>
        </div>
    );
}
