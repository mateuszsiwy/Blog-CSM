import React from "react";

const Specializations = () => {
    return (
      <section id="specializations" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Moje Specjalizacje</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">Specjalizacja 1</h3>
              <p className="mt-2 text-gray-600">Krótki opis...</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">Specjalizacja 2</h3>
              <p className="mt-2 text-gray-600">Krótki opis...</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">Specjalizacja 3</h3>
              <p className="mt-2 text-gray-600">Krótki opis...</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Specializations;
  