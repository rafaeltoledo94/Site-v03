import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Home } from "@/app/pages/Home";
import { IdeiasNegocios } from "@/app/pages/IdeiasNegocios";
import { NextLab } from "@/app/pages/NextLab";
import { Blog } from "@/app/pages/Blog";
import { BlogPost } from "@/app/pages/BlogPost";
import { QuemSomos } from "@/app/pages/QuemSomos";
import { ScrollToTop } from "@/app/components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ideias-negocios" element={<IdeiasNegocios />} />
            <Route path="/nextlab" element={<NextLab />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
