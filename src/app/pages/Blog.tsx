import { motion } from "motion/react";
import { Mail, ArrowRight, Tag, Calendar, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogPosts } from "../data/blogData";

export const Blog = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const sliderRef = useRef<Slider>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulação de envio
    setStatus("success");
    setEmail("");
    
    // Resetar estado após 3 segundos
    setTimeout(() => setStatus("idle"), 3000);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows to use custom ones
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans pt-20 overflow-x-hidden">
      
      {/* Header Newsletter */}
      <div className="bg-[#a3e635] py-20 border-b-4 border-black px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="bg-black text-white px-4 py-1 font-bold uppercase text-sm mb-4 inline-block">
              Atualização Semanal
            </span>
            <h1 className="font-['Oswald'] text-6xl md:text-8xl font-bold uppercase leading-none mb-6">
              Next <br/>News
            </h1>
            <p className="text-xl font-bold mb-8 max-w-md">
              Insights diretos, sem filtro e sem enrolação sobre negócios, inovação e futuro. Assine para não ficar para trás.
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center pl-4">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full py-4 px-4 bg-transparent font-bold outline-none placeholder:text-gray-400 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bg-black text-[#a3e635] px-8 font-bold uppercase hover:bg-[#1a052e] transition-colors flex items-center gap-2">
                  {status === "success" ? <CheckCircle /> : "Assinar"}
                </button>
              </div>
              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-10 left-0 font-bold text-[#1a052e] flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" /> Inscrito com sucesso!
                </motion.p>
              )}
            </form>
          </div>
          
          <div className="md:w-1/2 relative group">
             <Link to="/blog/0" className="block">
               <div className="border-4 border-black p-2 bg-white rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2340&auto=format&fit=crop" alt="Newsletter" className="w-full h-80 object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" />
                  <div className="p-4 bg-black text-white group-hover:bg-[#1a052e] transition-colors">
                    <p className="font-mono text-xs uppercase text-[#a3e635] mb-1">Última Edição</p>
                    <h3 className="font-['Oswald'] text-2xl uppercase group-hover:text-[#a3e635] transition-colors">Por que o "feito" é melhor que o "perfeito"?</h3>
                  </div>
               </div>
             </Link>
          </div>
        </div>
      </div>

      {/* Latest Posts Slider */}
      <div className="container mx-auto py-20 px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4 gap-6">
          <h2 className="font-['Oswald'] text-5xl font-bold uppercase">Últimas <span className="text-[#a3e635] bg-black px-2">Notícias</span></h2>
          
          <div className="flex items-center gap-4">
            <span className="hidden lg:block font-bold uppercase text-sm mr-4">Navegar</span>
            <div className="flex gap-2">
              <button 
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-12 h-12 flex items-center justify-center border-4 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(163,230,53,1)] hover:shadow-none active:translate-x-1 active:translate-y-1"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => sliderRef.current?.slickNext()}
                className="w-12 h-12 flex items-center justify-center border-4 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(163,230,53,1)] hover:shadow-none active:translate-x-1 active:translate-y-1"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <Slider ref={sliderRef} {...sliderSettings} className="gap-4 -mx-2">
          {blogPosts.map((post) => (
            <div key={post.id} className="px-2 pb-4"> {/* Added pb-4 for shadow space */}
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link to={`/blog/${post.id}`} className="block flex-1 flex flex-col">
                  <div className="relative overflow-hidden border-4 border-black mb-4 shadow-[4px_4px_0px_0px_rgba(163,230,53,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(26,5,46,1)] transition-all duration-300">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-[#a3e635] text-black px-2 py-0.5 font-bold text-xs uppercase border border-black flex items-center gap-1">
                      <Tag className="w-2 h-2" /> {post.category}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2 text-gray-500 font-bold text-xs uppercase">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  </div>

                  <h3 className="font-['Oswald'] text-xl md:text-2xl font-bold uppercase leading-tight mb-2 group-hover:text-[#a3e635] transition-colors bg-white inline-block flex-grow">
                    {post.title}
                  </h3>
                  
                  <div className="text-black font-bold uppercase text-sm tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto pt-2">
                    Ler Mais <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.article>
            </div>
          ))}
        </Slider>

        {/* Load More */}
        <div className="mt-20 text-center">
           <p className="font-mono text-gray-400 mb-4">Mostrando {blogPosts.length} posts</p>
           <button className="border-4 border-black px-12 py-4 font-bold uppercase hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
             Carregar Mais Arquivos
           </button>
        </div>
      </div>
    </div>
  );
};
