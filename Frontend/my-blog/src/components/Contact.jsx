import React from "react";
import facebook from "../assets/facebook-icon.png";
import linkedin from "../assets/linkedin-icon.png";
import instagram from "../assets/instagram-icon.png";

const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-[url(./assets/backcontact.png)] bg-cover bg-center text-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-white">
          <h2 className="text-4xl md:text-5xl text-[#cdad7d]">Skontaktuj się ze mną</h2>
          <p className="text-2xl md:text-4xl mt-4">Napisz do mnie lub zadzwoń, jeżeli mogę Ci pomóc!</p>
          <div className="text-xl md:text-3xl mt-6">
            <p className=""><strong>Email:</strong> asiwy@amsiwy.com</p>
            <p className=""><strong>Telefon:</strong> 606 216 316</p>
          </div>
          <div className="mt-8">
            <p className="">Zaobserwuj mnie:</p>
            <div className="flex justify-center mt-4 space-x-6 md:space-x-12">
              <a href="https://www.facebook.com/profile.php?id=61565350672344" className="icon"><img src={facebook} alt="Facebook" className="h-12 md:h-20"/></a>
              <a href="https://www.linkedin.com/in/agnieszka-siwy/" className="icon"><img src={linkedin} alt="LinkedIn" className="h-12 md:h-20" /></a>
              <a href="https://www.instagram.com/czytelne_prawo/" className="icon"><img src={instagram} alt="Instagram" className="h-12 md:h-20" /></a>
            </div>          
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;