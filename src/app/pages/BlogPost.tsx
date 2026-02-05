import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black pt-20">
        <h1 className="font-['Oswald'] text-6xl font-bold uppercase mb-4">404</h1>
        <p className="text-xl mb-8">Post não encontrado.</p>
        <Link to="/blog" className="bg-[#a3e635] text-black px-8 py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors">
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans pt-24 pb-20">
      {/* Progress Bar (Simple) */}
      <motion.div 
        className="fixed top-0 left-0 h-2 bg-[#a3e635] z-50"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }} // Just an entrance animation, real scroll progress requires more complex logic
      />

      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 font-bold uppercase tracking-wide hover:text-[#a3e635] transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Voltar para notícias
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
            <span className="bg-[#1a052e] text-white px-3 py-1 flex items-center gap-2">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
          </div>

          <h1 className="font-['Oswald'] text-4xl md:text-6xl font-bold uppercase leading-tight mb-8">
            {post.title}
          </h1>

          <div className="border-l-4 border-[#a3e635] pl-6 py-2 mb-10">
            <p className="text-xl md:text-2xl text-gray-600 font-medium italic">
              {post.excerpt}
            </p>
          </div>

          <div className="relative aspect-video w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(26,5,46,1)]">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Text */}
          <div className="lg:w-3/4">
            <div 
              className="prose prose-lg prose-headings:font-['Oswald'] prose-headings:uppercase prose-headings:font-bold prose-p:text-gray-700 prose-a:text-[#a3e635] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a052e] max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>

          {/* Sidebar / Share */}
          <div className="lg:w-1/4">
            <div className="sticky top-32">
              <h3 className="font-['Oswald'] text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Compartilhar</h3>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 w-full border-2 border-gray-200 p-3 hover:border-[#1877F2] hover:text-[#1877F2] transition-colors font-bold uppercase text-sm">
                  <Facebook className="w-5 h-5" /> Facebook
                </button>
                <button className="flex items-center gap-3 w-full border-2 border-gray-200 p-3 hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors font-bold uppercase text-sm">
                  <Twitter className="w-5 h-5" /> Twitter
                </button>
                <button className="flex items-center gap-3 w-full border-2 border-gray-200 p-3 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors font-bold uppercase text-sm">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </button>
                <button className="flex items-center gap-3 w-full border-2 border-gray-200 p-3 hover:bg-black hover:text-white transition-colors font-bold uppercase text-sm">
                  <Share2 className="w-5 h-5" /> Copiar Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <div className="mt-20 bg-[#f3f4f6] py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-['Oswald'] text-3xl font-bold uppercase mb-6">Gostou desse conteúdo?</h3>
          <p className="mb-8 max-w-xl mx-auto">Inscreva-se na nossa newsletter para receber mais artigos como este.</p>
          <Link to="/blog" className="inline-block bg-[#a3e635] text-[#1a052e] px-10 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-[#a3e635] transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Voltar e Assinar
          </Link>
        </div>
      </div>
    </div>
  );
};
