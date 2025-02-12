import React from "react";
import portrait from "../assets/portret.jpg"; 
import background from "../assets/back2.png";
import wskaznik from "../assets/pointer4.png";
const Hero = () => {
    return (
      <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-primary py-16 px-4" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-8xl grid grid-cols-1 md:grid-cols-[30%_70%] gap-1 items-center">
      <div className="flex flex-col items-center w-xl self-start">
      <h2 className="text-7xl text-[#cdad7d] mb-18">O mnie</h2>
      <img 
        src={portrait} 
        alt="Portret" 
        className="w-4/5 max-w-md rounded-lg shadow-lg mb-12"
      />
    </div>
        
                <div className="space-y-6 text-3xl">
          <div className="flex items-start gap-4">
            <img src={wskaznik} alt="wskaznik" className="w-16 h-16 object-contain mt-6" />
            <div className="bg-beige p-6 rounded-lg shadow-md flex-1">
              <p className="text-gray-700">
                Od prawie 25 lat, jako radczyni prawna, doradzam różnym podmiotom gospodarczym <span className="font-bold">w zakresie prawa pracy i szeroko rozumianego HR.</span> Znam specyfikę zarówno dużych zakładów, zatrudniających kilkaset osób, z działającymi w nich związkami zawodowymi, jak również mniejszych jednostek, gdzie problemy mogą być trochę inne. Zawsze staram się jak najlepiej i najbezpieczniej dostosować rozwiązanie prawne do potrzeb pracodawcy. Śmiało mogę powiedzieć, że znam prowadzenie biznesu od podszewki – nie tylko na podstawie doświadczeń z prowadzonej przez siebie Kancelarii ale również, wskutek szefowania w przeszłości gdańskim oddziałem jednej z największych kancelarii prawnych w Polsce, i wiem z czym borykają się pracodawcy.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <img src={wskaznik} alt="wskaznik" className="w-16 h-16 object-contain mt-6" />
            <div className="bg-beige p-6 rounded-lg shadow-md flex-1">
              <p className="text-gray-700">
                Obsługę przedsiębiorców w zakresie prawa pracy ułatwia mi bardzo bieżące analizowanie zmieniających się przepisów, orzecznictwa. W Okręgowej Izbie Radców Prawnych w Gdańsku od kilkunastu lat prowadzę bowiem wykłady i ćwiczenia dla aplikantów radcowskich właśnie z tej dziedziny. Od czasu do czasu prowadzę również szkolenia dla radców prawnych z bieżących zmian w prawie pracy.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <img src={wskaznik} alt="wskaznik" className="w-16 h-16 object-contain mt-6" />
            <div className="bg-beige p-6 rounded-lg shadow-md flex-1">
              <p className="text-gray-700">
                W bieżącej komunikacji staram się odczarować mit skomplikowanego języka prawniczego. Moim klientom tłumaczę, nawet zawiłe zagadnienia, w jak najbardziej zrozumiały sposób.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
export default Hero;