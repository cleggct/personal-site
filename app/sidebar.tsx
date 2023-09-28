import React from 'react';
import profilePic from './media/selfie.jpg';
import Image from 'next/image';

export default function Sidebar() {
    
    return (<div className={"flex flex-col flex-1 w-1/6 mr-10 h-full"}>
                <Image 
                    className={"object-cover mb-4 rounded-full aspect-square"}
                    src={profilePic}
                    alt=""/>
                <p className={"text-center text-2xl text-slate-400"}>
                   ~ 🪷 🇫🇮🎻🩵🖖🍵 🪷  ~
                </p>
                <p className={"text-center text-m mb-4"}>
                    Hi, I&apos;m Christa. Welcome to my website!
                </p>
                <a className={"text-center hover:text-slate-100"} href="https://www.github.com/cleggct">My GitHub</a>
                <a className={"text-center hover:text-slate-100"} href="https://www.linkedin.com/in/chris-clegg-6b4a41235/">My LinkedIn</a>
                <p className={"text-center mt-4"}>
                    You can get in touch with me at <br /> cleggct (at) gmail (dot) com
                </p>
            </div>
            );
}
