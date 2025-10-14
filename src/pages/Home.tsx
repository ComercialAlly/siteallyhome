import { ArrowRight, Users, Video, Target, MessageSquare, PenTool, Lightbulb, Star, Mail, Instagram } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';
import { getWhatsAppLink } from '../utils/whatsapp';

interface HomeProps {
  onNavigate: (page: 'portfolio') => void;
}

const services = [
  { icon: PenTool, title: 'Designer', description: 'Identidade visual que marca presença' },
  { icon: Video, title: 'Editor de vídeo', description: 'Conteúdo que engaja e converte' },
  { icon: Target, title: 'Gestor de anúncios', description: 'ROI máximo em cada campanha' },
  { icon: Users, title: 'Consultor comercial', description: 'Estratégias que geram vendas' },
  { icon: MessageSquare, title: 'Copywriter', description: 'Textos que vendem por você' },
  { icon: Lightbulb, title: 'Mentor de projetos', description: 'Visão estratégica do início ao fim' },
];

const testimonials = [
  {
    name: 'Carlos Mendes',
    company: 'Tech Solutions',
    text: 'A Ally transformou nossa presença digital. Resultados reais em menos de 3 meses.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    name: 'Mariana Costa',
    company: 'Bella Cosmetics',
    text: 'Finalmente encontramos uma agência que entende de vendas, não só de curtidas.',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    name: 'Roberto Silva',
    company: 'Fit Academy',
    text: 'Profissionalismo e resultado. Nossa receita cresceu 180% com as campanhas deles.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const scrollToContact = () => {
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center pt-24">
          <ScrollReveal animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tudo o que sua marca precisa,<br />
              <span className="text-orange-500">em um só lugar.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              A agência 5.0 que entrega resultado, não promessa.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://allymidia.webflow.io/portfolio2', '_self')}
                className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
              >
                Ver Portfólio
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="group bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-xl shadow-orange-500/30 inline-flex items-center justify-center gap-2"
              >
                Fale com um especialista
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              O que entregamos
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
              Um time completo, pronto para fazer sua marca crescer.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700 hover:border-orange-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
                  <service.icon className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Resultados que impressionam
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-center text-gray-400 text-lg mb-16">
              Não vendemos marketing. Entregamos resultado.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  +<Counter end={1000} />
                </div>
                <p className="text-gray-400 text-lg">Campanhas gerenciadas</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  +<Counter end={100} />
                </div>
                <p className="text-gray-400 text-lg">Marcas posicionadas</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  +<Counter end={400} suffix="K" />
                </div>
                <p className="text-gray-400 text-lg">Em receitas de anúncios</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-xl shadow-orange-500/30 inline-flex items-center gap-2"
              >
                Quero resultados assim
                <ArrowRight size={20} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              O que nossos clientes dizem
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700 hover:border-orange-500 transition-all hover:scale-105">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-orange-500 fill-orange-500" size={18} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Sua próxima grande campanha<br />
                <span className="text-orange-500">começa aqui.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Vamos transformar sua marca em uma máquina de vendas.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="group bg-orange-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-600 transition-all hover:scale-105 shadow-2xl shadow-orange-500/40 inline-flex items-center gap-2 mb-12 animate-pulse hover:animate-none"
              >
                Fale com a Ally
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>

              <div className="flex justify-center gap-6 pt-8 border-t border-zinc-800">
                <a
                  href="https://www.instagram.com/allymidia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="mailto:comercial@allymidia.com.br"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Mail size={28} />
                </a>
              </div>

              <p className="text-gray-500 text-sm mt-8">
                © 2025 Ally Mídia. Todos os direitos reservados.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
