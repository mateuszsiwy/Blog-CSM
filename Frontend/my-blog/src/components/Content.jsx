import React from "react";
import logo from "../assets/logo2.png";

const Content = () => {
    return (
        <div id="content" className="min-h-screen bg-[url(./assets/backContent.png)] bg-cover bg-center flex items-center justify-center z-0">
            <div className="flex flex-col md:flex-row w-4/5 h-4/5 backdrop-blur-[25px] bg-[rgba(62,62,99,0.3)] items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full md:w-3/5 h-full">
                    <p className="text-white text-3xl md:text-5xl mt-10 font-lobster">#CzytelnePrawo</p>
                    <img className="w-3/5 md:w-2xl md:-mb-22 md:-mt-22" src={logo} alt="Logo" />
                    <p className="text-[#cdad7d] text-2xl md:text-5xl">Agnieszka Siwy</p>
                    <p className="text-white text-xl italic pb-9">RADCZYNI PRAWNA</p>
                    <p className="text-[#cdad7d] text-lg md:text-3xl tracking-[9px] mb-10">KANCELARIA PRAWA PRACY</p>
                </div>
                <div className="w-full md:w-2/6 h-full">
                    <ul className="list-none p-0 m-0 text-xl md:text-4xl h-full flex flex-col justify-center">
                        <li className="border-t border-b border-white">
                            <a href="#about" className="block text-white font-bold text-left py-5">O MNIE</a>
                        </li>
                        <li className="border-b border-white">
                            <a href="#specializations" className="block text-white font-bold text-left py-5">SPECJALIZACJE</a>
                        </li>
                        <li className="border-b border-white">
                            <a href="#blog" className="block text-white font-bold text-left py-5">BLOG</a>
                        </li>
                        <li className="border-b border-white">
                            <a href="#presentations" className="block text-white font-bold text-left py-5">PREZENTACJE</a>
                        </li>
                        <li className="border-b border-white">
                            <a href="#contact" className="block text-white font-bold text-left py-5">KONTAKT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content;