import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import FileUpload from './UpLoadFile';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button 
                className="lg:hidden fixed top-0 left-0 m-4 z-50 bg-quinary rounded p-2"
                onClick={handleToggle}
            >
                <FontAwesomeIcon icon={faBars} size="2x" className="text-primary" />
            </button>
            <div className={`fixed top-0 left-0 h-screen transition-all duration-300 overflow-auto z-40 
                ${isOpen ? 'w-full bg-quinary' : 'w-0 bg-quinary'} 
                lg:relative lg:w-[300px] lg:h-screen lg:float-right`}>

                <div className="pt-10 px-4 lg:px-0">
                    <h1 className="text-xl mb-5 font-courier flex justify-center items-center text-secondary">
                        <Image src="/images/excelGPTlogo.png" alt="Excel Icon" width={125} height={125} />
                    </h1>
                    <div className="mt-5 pb-8">
                        <FileUpload />
                    </div>
                    <div className="text-secondary text-center">
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="block mb-2 ">
                            <FontAwesomeIcon icon={faDiscord} size="2x" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block mb-2 ">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block mb-2 ">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
