'use client';

import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

export default function Home()  {
    return ( 
        <div className={"bg-slate-900 text-slate-400 font-medium flex flex-col p-10 h-screen overflow-auto"}>

            <div className={"flex-init mb-14"}>
                 {Header()}
            </div>
            
            <div className={"flex flex-row flex-1 w-full h-5/6"}>
                {Sidebar()}    
            <div className={"flex 1 w-5/6 h-full p-10 text-xl bg-slate-800 rounded-3xl"}>
               <p> This is where my projects go </p> 
            </div>
            </div>

        </div>
    );
}
