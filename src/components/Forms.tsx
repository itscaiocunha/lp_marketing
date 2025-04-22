import React, { useEffect } from 'react';

const Forms = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "19489363",
          formId: "73ec6dee-c78a-46c7-b439-f10ecfc71b15",
          region: "na1",
          target: "#hubspotForm"
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Limpeza ao desmontar o componente
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="cadastro" className="py-20">
      <div className="container mx-auto px-4">
        {/* Título centralizado acima */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F75898] mb-2">
            Vamos Conversar
          </h2>
          <p>Descubra como podemos ajudar sua empresa a crescer</p>
        </div>

        {/* Container pai para alinhamento perfeito */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto">
          {/* Formulário - mesma altura que a imagem */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl h-full">
              <div id="hubspotForm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;