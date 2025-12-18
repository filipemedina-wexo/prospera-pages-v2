import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X } from 'lucide-react';

const Transformation = () => {
    const [sliderValue, setSliderValue] = useState(50);
    const [ref, isInView] = useInView({ threshold: 0.1 });

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative" ref={ref}>
            {/* Background decorative blobs - Dark Mode */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-0">
                <motion.div
                    animate={{ y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500 rounded-full blur-[100px] opacity-20"
                />
                <motion.div
                    animate={{ y: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-20"
                />
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-teal-400 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Transformação Real
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        O impacto de uma página profissional
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Veja a diferença entre ser apenas mais um e ser uma referência no seu mercado.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
                    {/* Before/After Slider */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-3/5"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 select-none ring-1 ring-white/10">
                            {/* After Image (Full width underneath) */}
                            {/* After Image (Full width underneath) */}
                            <div className="absolute inset-0 bg-slate-800">
                                <img
                                    src="/depois.png"
                                    alt="Depois - Site Profissional"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">DEPOIS</div>
                            </div>

                            {/* Before Image (Clipped on top) */}
                            <div
                                className="absolute inset-0 bg-slate-200"
                                style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}
                            >
                                <img
                                    src="/antes.png"
                                    alt="Antes - Site Amador"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute top-0 left-0 bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">ANTES</div>
                                <div className="absolute inset-y-0 right-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ right: `${100 - sliderValue}%` }}></div>
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                style={{ left: `${sliderValue}%` }}
                            >
                                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-200">
                                    <div className="flex gap-0.5">
                                        <div className="w-0.5 h-3 bg-slate-400" />
                                        <div className="w-0.5 h-3 bg-slate-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Range Input for Logic */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                            />
                        </div>
                    </motion.div>

                    {/* Benefits List */}
                    <div className="w-full lg:w-2/5">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1 border border-teal-500/20">
                                    <Check className="text-teal-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Mais Clareza</h3>
                                    <p className="text-slate-400 leading-relaxed">Seu cliente entende exatamente o que você vende e porque deve comprar de você.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1 border border-teal-500/20">
                                    <Check className="text-teal-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Mais Confiança</h3>
                                    <p className="text-slate-400 leading-relaxed">Um design profissional passa credibilidade instantânea. Elimine a dúvida do seu cliente.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1 border border-teal-500/20">
                                    <Check className="text-teal-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Mais Ação</h3>
                                    <p className="text-slate-400 leading-relaxed">Botões estratégicos e chamadas persuasivas que transformam visitantes em clientes.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8 }}
                                className="pt-6"
                            >
                                <Button
                                    onClick={() => scrollToSection('form')}
                                    size="lg"
                                    className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all"
                                >
                                    Quero isso no meu negócio
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transformation;
