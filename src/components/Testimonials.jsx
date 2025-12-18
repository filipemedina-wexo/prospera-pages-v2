import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Souza',
    role: 'Confeitaria Artesanal',
    content: 'Eu não entendia nada de site. A equipe da Prospera pegou minha ideia e transformou numa página linda. Meus pedidos pelo WhatsApp dobraram na primeira semana!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Carlos Oliveira',
    role: 'Advogado Trabalhista',
    content: 'Passou uma imagem muito mais profissional para o meu escritório. Antes eu mandava PDF, agora mando o link do meu site. O retorno dos clientes mudou totalmente.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Mariana Costa',
    role: 'Loja de Roupas',
    content: 'O catálogo digital facilitou muito. Não preciso mais ficar mandando mil fotos. O cliente entra, escolhe e me chama já sabendo o que quer. Prosperei!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-24 bg-amber-50/50 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
            Quem aprova
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            O que dizem nossos parceiros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative group"
            >
              <Quote className="absolute top-6 right-6 text-slate-200 group-hover:text-teal-100 transition-colors duration-300" size={48} />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 italic mb-8 relative z-10 flex-1 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full list-image-none object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-teal-600 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
