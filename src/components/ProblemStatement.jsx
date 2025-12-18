import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';

const ProblemStatement = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-100/30 to-blue-100/30 blur-3xl rounded-full -z-10" />

            <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                <motion.div style={{ y, opacity }}>
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                            <Quote size={40} className="fill-current" />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight tracking-tight">
                        <span className="block mb-2">Você não precisa ter que aprender a fazer sites ou investir um valor alto para ter um.</span>
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemStatement;
