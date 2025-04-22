
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Cases from "@/components/Cases";
import Numbers from "@/components/Numbers";
import Forms from "@/components/Forms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <Cases />
      <Numbers />
      <Forms />
      <Footer />
    </div>
  );
};

export default Index;
