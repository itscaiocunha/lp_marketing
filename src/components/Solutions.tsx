const Solutions = () => {
  const solutions = [
    { 
      video: "https://w7startup.com.br/video/marketing/projetoico.mp4", 
      alt: "Social Media" 
    },
    { 
      video: "https://w7startup.com.br/video/marketing/trafego.mp4", 
      alt: "Tráfego Pago" 
    },
    { 
      video: "https://w7startup.com.br/video/marketing/coloracao.mp4", 
      alt: "Audiovisual" 
    },
    { 
      video: "https://w7startup.com.br/video/marketing/edicao.mp4", 
      alt: "Audiovisual" 
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-4">NOSSAS SOLUÇÕES</h2>
        <p className="text-center text-gray-600 mb-12">Veja como nossa agência pode transformar a sua empresa</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="transition-shadow flex justify-center">
              <div className="w-full max-w-xs flex flex-col items-center">
                <video 
                  src={solution.video} 
                  controls 
                  className="w-full h-auto aspect-[9/16] object-cover rounded-md"
                  playsInline
                >
                  Seu navegador não suporta vídeo HTML5.
                </video>
                <div 
                  className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-md"
                  aria-hidden="true"
                >
                  {solution.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;