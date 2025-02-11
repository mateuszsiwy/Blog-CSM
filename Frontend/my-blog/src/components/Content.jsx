import React from "react";
import logo from "../assets/logo2.png";

const Content = () => {
    return (
        <div id="content" className="h-screen bg-[url(./assets/backContent.png)] bg-cover bg-center flex items-center justify-center z-0">
            <div className="flex w-4/5 h-4/5 backdrop-blur-[25px] bg-[rgba(62,62,99,0.3)]">
            <div className="flex flex-col items-center justify-center w-3/5 h-full">
                    <p className="text-white text-5xl">#CzytelnePrawo</p>
                    <img className="w-2xl" src={logo} alt="Logo" />
                    <p className="text-[#cdad7d] text-5xl font-semibold">Agnieszka Siwy</p>
                    <p className="text-white text-2xl italic pb-3">RADCZYNI PRAWNA</p>
                    <p className="text-[#cdad7d] text-3xl tracking-[9px]">KANCELARIA PRAWA PRACY</p>
                </div>
                <div className="w-2/6 h-full">
                    <ul className="list-none p-0 m-0 text-4xl h-full flex flex-col justify-center">
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