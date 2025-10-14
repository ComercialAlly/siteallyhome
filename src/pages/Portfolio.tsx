import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { getWhatsAppLink } from '../utils/whatsapp';

interface PortfolioProps {
  onNavigate: (page: 'home') => void;
}

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  result?: string;
  isVideo?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Beachwear Brazil',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Social Midia, reconhecimento de marca e E-commerce',
  },
  {
    id: 2,
    title: 'Fernanda Franco',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'rebranding, Social Midia e consultoria comercial',
  },
  {
    id: 3,
    title: 'Naska',
    image: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Social Midia e reconhecimento de marca',
  },
  {
    id: 4,
    title: 'Equipalaser',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'rebranding, Campanhas de alta conversão, social midia e site e LP`s',
  },
  {
    id: 5,
    title: 'Viniadestra',
    image: '/Passear não é luxo.  É necessidade!.png',
    description: 'rebranding, Social midia e alta geração de demanda',
  },
  {
    id: 6,
    title: 'Consorciando Brasil',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'rebranding, Social midia e alta geração de demanda',
  },
  {
    id: 7,
    title: 'Elisa Andrade',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Social midia, alta geração de demanda e consultoria comercial',
  },
  {
    id: 8,
    title: 'PetBumber',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'rebranding',
  },
  {
    id: 9,
    title: 'E-clinic',
    image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Marca completa para fintech inovadora',
    result: 'rebranding e social midia',
     },
  {
    id: 10,
    title: 'Itakha',
    image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'rebranding',
     },
  {
    id: 11,
    title: 'MedMovie',
    image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'rebranding',
    result: 'Investimento de R$2M captado',
  },
];

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const scrollToContact = () => {
    onNavigate('home');
    setTimeout(() => {
      const footer = document.getElementById('contact');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  const handlePortfolioClick = () => {
    window.open('https://allymidia.webflow.io/portfolio2', '_self');
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
              Resultados que falam<br />
              <span className="text-orange-500">por si.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12">
              Veja alguns dos projetos que transformaram marcas em máquinas de venda.
            </p>
          </ScrollReveal>

        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 50}>
                <div
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={handlePortfolioClick}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
                    hoveredProject === project.id ? 'translate-y-0' : 'translate-y-8'
                  }`}>
                    <div className="transform transition-all duration-300">
                      {project.isVideo && (
                        <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                            <Play className="fill-white text-white" size={20} />
                          </div>
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-2">{project.description}</p>
                      {project.result && (
                        <p className="text-orange-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.result}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Case em Destaque
              </h2>
              <div className="bg-zinc-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-zinc-800">
                <h3 className="text-3xl font-bold mb-4 text-orange-500">
                  Transformação Digital - Tech Solutions
                </h3>
                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Desafio</h4>
                    <p className="text-gray-400">
                      Startup de tecnologia sem identidade visual definida e zero presença digital.
                      Precisavam captar investimento e atrair clientes corporativos.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Estratégia</h4>
                    <p className="text-gray-400">
                      Criamos uma identidade visual moderna e profissional, desenvolvemos site institucional,
                      implementamos estratégia de conteúdo no LinkedIn e criamos campanha de tráfego pago segmentada.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Resultado</h4>
                    <p className="text-gray-400">
                      Em 6 meses: R$2M em investimento captado, 150+ leads qualificados gerados,
                      45% de aumento no reconhecimento de marca e 8 contratos corporativos fechados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Pronto para ver o nome da<br />
                <span className="text-orange-500">sua marca aqui?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Vamos criar a próxima história de sucesso juntos.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="group bg-orange-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-600 transition-all hover:scale-105 shadow-2xl shadow-orange-500/40 inline-flex items-center gap-2"
              >
                Solicitar proposta
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
