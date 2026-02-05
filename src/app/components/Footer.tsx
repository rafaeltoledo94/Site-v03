import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="bg-black text-white py-20 px-6 border-t-2 border-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20 border-b border-white/20 pb-20">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase leading-none mb-8">
              Vamos <br/><span className="text-stroke-2">Conversar?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md">
              Seja para transformar sua empresa ou levar inovação para sua escola. O futuro começa com um "oi".
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold uppercase text-sm text-gray-400">Nome</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white focus:border-lime-400 focus:outline-none transition-colors text-xl font-medium placeholder:text-white/10" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-sm text-gray-400">Email</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white focus:border-lime-400 focus:outline-none transition-colors text-xl font-medium placeholder:text-white/10" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-sm text-gray-400">Telefone</label>
                <input type="tel" className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white focus:border-lime-400 focus:outline-none transition-colors text-xl font-medium placeholder:text-white/10" placeholder="(XX) 99999-9999" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-bold uppercase text-sm text-gray-400">Mensagem</label>
              <textarea rows={3} className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white focus:border-lime-400 focus:outline-none transition-colors text-xl font-medium placeholder:text-white/10 resize-none" placeholder="Como podemos ajudar?"></textarea>
            </div>
            
            <button className="w-full bg-white text-black font-bold uppercase text-xl py-6 hover:bg-lime-400 transition-colors flex justify-between px-8 group">
              <span>Enviar Agora</span>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="flex flex-col gap-2">
            <h3 className="font-display font-bold text-3xl uppercase">Ideias & NextLab</h3>
            <p className="text-gray-500">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          
          <div className="flex gap-8 mt-8 md:mt-0">
             <a href="#" className="font-bold uppercase hover:text-lime-400 transition-colors">Instagram</a>
             <a href="#" className="font-bold uppercase hover:text-lime-400 transition-colors">Linkedin</a>
             <a href="#" className="font-bold uppercase hover:text-lime-400 transition-colors">Whatsapp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
