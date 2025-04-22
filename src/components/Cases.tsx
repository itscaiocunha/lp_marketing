import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cases = () => {
  const cases = [
    { logo: "/images/tyreplus.png", alt: "Tyre Plus" },
    { logo: "/images/aquamonster.png", alt: "Aqua Monster" },
    { logo: "/images/nissan.png", alt: "Nissan" },
    { logo: "/images/wisecar.png", alt: "Wisecar" },
    { logo: "/images/panela.png", alt: "Panela" },
    { logo: "/images/citroen.png", alt: "Citroën" },
    { logo: "/images/peugeot.png", alt: "Peugeot" },
    { logo: "/images/xian.png", alt: "Xian" },
    { logo: "/images/agrogoods.png", alt: "Agro Goods" },
    { logo: "/images/anglo.png", alt: "Anglo" },
    { logo: "/images/aquanalyze.png", alt: "Aqua Analyze" },
    { logo: "/images/avivamento.png", alt: "Avivamento" },
    { logo: "/images/casarao.png", alt: "Casarão" },
    { logo: "/images/constru4.png", alt: "Constru4" },
    { logo: "/images/hyndai.png", alt: "Hyundai" },
    { logo: "/images/honda.png", alt: "Honda" },
    { logo: "/images/icobatatas.png", alt: "Ico Batatas" },
    { logo: "/images/nzc.png", alt: "NZC" },
    { logo: "/images/quessada.png", alt: "Quessada" },
    { logo: "/images/thekillaz.png", alt: "The Killaz" },
    { logo: "/images/valornovo.png", alt: "Valor Novo" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">NOSSOS CASES DE SUCESSOS</h2>
        
        <div className="px-8">
          <Slider {...settings}>
            {cases.map((caseItem, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-lg shadow-md aspect-square flex items-center justify-center p-4 hover:shadow-lg transition-transform hover:scale-105">
                  <img 
                    src={caseItem.logo} 
                    alt={caseItem.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Cases;