
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-slate-50">
      {/* Background with Noise & Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/30 z-10 backdrop-blur-[1px]" />
        <div
          className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_50%_50%,_rgba(20,184,166,0.15),_rgba(255,255,255,0)_50%),radial-gradient(circle_at_100%_0%,_rgba(99,102,241,0.15),_rgba(255,255,255,0)_50%),radial-gradient(circle_at_0%_100%,_rgba(236,72,153,0.15),_rgba(255,255,255,0)_50%)]"
        />
        {/* Warmth overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/40 via-transparent to-blue-50/40 pointer-events-none" />

        {/* CSS Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 rounded-full text-teal-700 font-semibold text-sm mb-6 shadow-sm">
                <Sparkles size={16} className="text-teal-500 animate-pulse" />
                Simples. Acessível. Profissional.
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-teal-800 to-slate-800 bg-clip-text text-transparent leading-[1.2] tracking-tight pb-4">
                Seu negócio merece uma página à altura.
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                <strong className="text-teal-700">O Prospera</strong> cria sua página profissional do zero.
                Você envia as informações. Nós desenhamos, escrevemos e publicamos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('form')}
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-teal-500/20 transition-all duration-300 w-full sm:w-auto rounded-full"
                >
                  Quero minha página pronta
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-200 text-slate-600 hover:border-teal-500 hover:text-teal-600 hover:bg-white text-lg px-8 py-6 w-full sm:w-auto rounded-full bg-white/50 backdrop-blur-sm"
                >
                  Ver exemplos
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-sm font-medium text-slate-500"
            >
              <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 text-xs">✓</span>
                </div>
                Preço justo
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 text-xs">✓</span>
                </div>
                Entrega rápida
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 text-xs">✓</span>
                </div>
                Estudamos sua empresa
              </div>
            </motion.div>
          </div>

          {/* Premium Floating Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Decorative Background Blobs */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/40 to-green-100/40 rounded-full blur-3xl -z-10"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-200/40 to-purple-100/40 rounded-full blur-3xl -z-10"
            />

            {/* Main "Glass" Card - The Website */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 left-4 right-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden z-10"
            >
              {/* Browser Header */}
              <div className="h-8 bg-white/50 border-b border-slate-100 flex items-center px-4 gap-2 z-20 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <div className="ml-4 h-4 bg-slate-100 rounded-full w-64 opacity-50 flex items-center px-2">
                  <span className="text-[10px] text-slate-400 truncate">premium-joias-lancamento.useprospera.com.br</span>
                </div>
              </div>
              {/* Mockup Content - Video Playback */}
              <div className="relative w-full h-full bg-slate-900 group cursor-default overflow-hidden">
                <video
                  src="/hero-video.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/hero-video-poster.jpg"
                />

                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating Element 1: SALES GRAPH (Overlapping Bottom Left) */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-6 bottom-20 bg-white p-4 rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-slate-100 z-30 w-48"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-500">Vendas Mensais</span>
                <span className="text-xs font-bold text-green-500">+127%</span>
              </div>
              <div className="flex items-end gap-1 h-12">
                <div className="w-full bg-teal-50 rounded-t-sm h-4"></div>
                <div className="w-full bg-teal-100 rounded-t-sm h-6"></div>
                <div className="w-full bg-teal-200 rounded-t-sm h-5"></div>
                <div className="w-full bg-teal-300 rounded-t-sm h-8"></div>
                <div className="w-full bg-teal-400 rounded-t-sm h-10"></div>
                <div className="w-full bg-teal-500 rounded-t-sm h-12"></div>
              </div>
            </motion.div>

            {/* Floating Element 2: REVIEW (Overlapping Bottom Left of Desktop) */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-52 bottom-28 bg-white p-4 rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-slate-100 z-50 flex gap-3 items-center"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">A</div>
              <div>
                <div className="flex text-yellow-400 text-xs mb-1">★★★★★</div>
                <p className="text-xs font-medium text-slate-600 whitespace-nowrap">"Site incrível, amei!"</p>
              </div>
            </motion.div>

            {/* Floating Element 3: MOBILE MOCKUP (Moved Up and Left) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute right-28 bottom-24 w-[160px] h-[320px] bg-slate-900 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-slate-700/50 z-40 overflow-hidden"
            >
              {/* Minimalist Screen */}
              <div className="w-full h-full bg-slate-800 relative group">
                <video
                  src="/hero-video-mobile.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/hero-video-mobile-poster.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating Element 4: Active Users (Top Right) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute right-20 -top-6 bg-white px-4 py-3 rounded-full shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-slate-100 z-20 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-red-100 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-green-100 border-2 border-white" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-800 block">1.2k</span>
                <span className="text-slate-400">Visitantes</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
