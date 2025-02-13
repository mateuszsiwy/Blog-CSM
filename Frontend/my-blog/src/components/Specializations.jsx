import React from "react";

const Specializations = () => {
    return (
      <section id="specializations" className="min-h-screen py-16 bg-[url(./assets/backgroundspecializations.png)] bg-cover bg-center">
        <div className="max-w-8xl mx-auto px-4 md:px-32">
          <h2 className="text-4xl md:text-7xl text-[#cdad7d] text-center mb-8">Specjalizacje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 shadow-md border border-white text-xl md:text-3xl">
              <h3 className="text-3xl md:text-6xl text-[#cdad7d] mb-8 text-center">Porady prawne</h3>
              <ul className="list-disc list-inside text-white">
                <li>Doradzam, przygotowuję i opiniuję <strong>dokumentację</strong> dot. nawiązywania i rozwiązywania stosunku pracy.</li>
                <li>Sporządzam <strong>regulaminy, procedury i polityki</strong> - wszelkie niezbędne dla pracodawców regulacje.</li>
                <li>Przygotowuję <strong>umowy</strong> związane ze stosunkiem pracy m.in. porozumienia o stosowaniu mniej korzystnych warunków zatrudnienia, umowy o zakazie konkurencji, kontrakty menadżerskie.</li>
                <li>Przygotowuję <strong>opinie</strong> z zakresu prawa pracy, które pomagają moim klientom podjąć właściwe decyzje w nurtujących ich kwestiach.</li>
              </ul>
            </div>
            <div className="p-6 shadow-md border border-white text-xl md:text-3xl">
              <h3 className="text-3xl md:text-6xl text-[#cdad7d] mb-8 text-center">Szkolenia</h3>
              <ul className="list-disc list-inside text-white">
                <li>Prowadzę <strong>szkolenia i webinary</strong> z prawa pracy zarówno w formie stacjonarnej jak i online.</li>
                <li>Uczę specjalistów kadr i prac, jak również managerów i specjalistów HR z praktycznego stosowania prawa.</li>
                <li>Staram się aby moje szkolenia były nie tylko przydatne dla moich odbiorców ale również ciekawe i angażujące - wykorzystuję w nich różne aplikacje, w postaci np. interaktywnych testów, które urozmaicają zdobywanie nauki.</li>
              </ul>
            </div>
            <div className="p-6 shadow-md border border-white text-xl md:text-3xl">
              <h3 className="text-3xl md:text-6xl text-[#cdad7d] mb-8 text-center">Reprezentacja</h3>
              <ul className="list-disc list-inside text-white">
                <li>Reprezentuję strony stosunku pracy przed sądami powszechnymi.</li>
                <li>Prowadzę postępowania z zakresu uznania rozwiązania umowy o pracę za bezskuteczne/przywrócenie do pracy.</li>
                <li>Postępowania o zapłatę nadgodzin.</li>
                <li>Postępowania dot. uchylenia kary porządkowej.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Specializations;