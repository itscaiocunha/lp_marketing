
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gray-900/50 z-10"></div>
      <div className="absolute inset-0 bg-[url('/images/img-background.png')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-[#F75898] mb-6">
            Transformamos seu investimento em mídia em resultados reais
          </h1>
          <p className="text-white mb-6 font-bold">Combine estratégia, criatividade e tecnologia para escalar sua marca de forma consistente</p>
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-[10px]"
          >
            Quero escalar minha marca
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
