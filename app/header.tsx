'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {

    const pickRandom = (choices) => choices[Math.floor(Math.random() * choices.length)];

    const adjectives = [
        "Crystalline"
        ,"Cerulean"
        ,"Colossal"
        ,"Cryptic"
        ,"Celestial"
        ,"Centennial"
        ,"Consecrated"
        ,"Coded"
        ,"Chromatic"
        ];

    const nouns = [
        "Chrysanthemum"
        ,"Colossus"
        ,"Crinoid"
        ,"Crystal"
        ,"Coral"
        ,"Chrysalis"
        ,"Chimera"
        ,"Celestine"
        ,"Cetacean"
        ,"Centurion"
        ,"Constellation"
        ];

    const getRandomName = () => pickRandom(adjectives) + ' ' + pickRandom(nouns);

    const [name, setName] = useState("Christa Clegg");

    useEffect(() => {
        
        const interval = setInterval(() => {
            setName(getRandomName());
        }, 1500);

        return () => clearInterval(interval);
    }, [name]);

    return (<h1 className="flex-1 text-5xl italic font-black font-sans">

               {`CC Stands For ${name}`}
            </h1>);
}