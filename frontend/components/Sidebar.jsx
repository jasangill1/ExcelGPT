import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import FileUpload from './UpLoadFile';

export default function Sidebar() {
    return (
        <div className="relative w-[300px] h-full bg-quinary text-primary float-right text-center pt-10 font-courier flex flex-col justify-between">
            <div>
                <h1 className="text-xl mb-5 font-courier flex justify-center items-center text-secondary">
                    <Image src="/images/excelogo.png" alt="Excel Icon" width={500} height={500} />
                    
                </h1>
                <div className="mt-5">
                    <FileUpload />
                </div>
            </div>
            <div className="mb-5 text-secondary">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="block mb-2">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block mb-2">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block mb-2">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </div>
    );
}
