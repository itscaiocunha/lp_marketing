
const Numbers = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">NOSSOS NÚMEROS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">80%</div>
            <div className="text-xl">retenção</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">+5</div>
            <div className="text-xl">estados</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">+30</div>
            <div className="text-xl">clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
