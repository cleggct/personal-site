import React from 'react';
import profilePic from './media/selfie.jpg';
import Image from 'next/image';

export default function Sidebar() {
    
    return (<div class="flex flex-col flex-1 w-1/6 mr-10 h-full">
                <Image 
                    class="object-cover mb-4 rounded-full aspect-square"
                    src={profilePic}
                    alt=""/>
                <p class="text-center text-2xl text-slate-400">
                   ~ 🪷 🇫🇮🎻🩵🖖🍵 🪷  ~
                </p>
                <p class="text-center text-m mb-4">
                    Hi, I&apos;m Christa. Welcome to my website!
                </p>
                <a class="text-center hover:text-slate-100" href="https://www.github.com/cleggct">My GitHub</a>
                <a class="text-center hover:text-slate-100" href="https://www.linkedin.com/in/chris-clegg-6b4a41235/">My LinkedIn</a>
                <p class="text-center mt-4">
                    You can get in touch with me at <br /> cleggct (at) gmail (dot) com
                </p>
            </div>
            );
}
