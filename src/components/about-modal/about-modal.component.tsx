import React from 'react';
import { X, BookOpenText, GraduationCap, Hammer } from 'lucide-react';
import { useModalState, useModalDispatch } from '../../contexts';

const ABOUT_MODAL_TYPE = 'ABOUT';

const AboutModal: React.FC = () => {
  const { activeModal } = useModalState();
  const { closeModal } = useModalDispatch();

  if (activeModal !== ABOUT_MODAL_TYPE) return null;

  const handleClose = () => {
    closeModal();
  };

  const team = [
    {
      name: 'Paulo Cesar',
      role: 'Mestre Forjador (Desenvolvedor FullStack & NLP Specialist)',
      linkedin: 'https://www.linkedin.com/in/paulo-cfj/',
    },
    {
      name: 'Cristiano Oliveira',
      role: 'Ferramenteiro Chefe (Desenvolvedor Data Engineer & NLP Specialist)',
      linkedin: 'https://www.linkedin.com/in/ccso/',
    },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4">
      <div
        className="bg-yellow-100/95 text-gray-900 rounded-2xl shadow-2xl
                w-full max-w-lg md:max-w-xl flex flex-col
                border-4 border-yellow-700 transform transition-all duration-300 scale-100
                max-h-[90vh]"
      >
        <header className="relative flex justify-center items-center p-4 border-b-2 border-yellow-700 bg-yellow-200/50 sticky top-0 z-10 flex-shrink-0">
          <h2 className="text-2xl font-bold flex items-center text-yellow-900">
            <BookOpenText className="w-7 h-7 mr-3 text-yellow-800" />
            Sobre o Projeto
          </h2>

          <button
            onClick={handleClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-red-700 transition duration-200 text-red-500 hover:text-white cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        <main className="p-6 md:p-8 flex-1 text-left overflow-y-auto min-h-0">
          <h3 className="text-xl md:text-2xl font-serif font-extrabold text-amber-900 mb-4 text-center">
            A Criação por Trás do Grimório de One-Shots
          </h3>

          <section className="mb-6">
            <h4 className="text-lg font-bold flex items-center mb-2 text-yellow-900">
              <GraduationCap className="w-5 h-5 mr-2" />
              Contexto Acadêmico
            </h4>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Este é o
              <strong className="font-extrabold">
                Trabalho de Conclusão de Curso (TCC) {''}
              </strong>
              final do {''}
              <strong className="font-extrabold">
                Curso de Pós-Graduação Lato Sensu – Especialização
              </strong>
              {''} em {''}
              <strong className="font-extrabold">
                Processamento de Linguagem Natural (NLP)
              </strong>
              .
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              O curso é uma iniciativa da
              <strong className="font-extrabold">
                Universidade Federal de Goiás (UFG) – Regional Goiânia
              </strong>
              , fazendo parte do Plano de Formação e Capacitação do {''}
              <strong className="font-extrabold">
                Centro de Competência EMBRAPII em Tecnologias Imersivas (AKCIT)
              </strong>
              .
            </p>
            <p className="text-gray-700 leading-relaxed">
              O projeto visa explorar a aplicação inovadora de Large Language
              Models (LLMs) para estruturar a criação narrativa e combater o
              bloqueio criativo em TTRPGs.
            </p>
          </section>

          <section className="mb-6">
            <h4 className="text-lg font-bold flex items-center mb-4 text-yellow-900">
              <Hammer className="w-5 h-5 mr-2" />
              Equipe de Forjadores
            </h4>
            <div className="space-y-4">
              {team.map((member, index) => (
                <div key={index} className="border-l-4 border-yellow-500 pl-3">
                  <p className="font-bold text-gray-900 flex items-center">
                    <Hammer className="w-4 h-4 mr-2 text-yellow-700" />
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-700 mb-1">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center transition"
                  >
                    Ver Perfil no LinkedIn
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M11 3a1 1 0 100 2h4a1 1 0 100-2h-4zM7 7a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zM7 15a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zM3 3h4V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4h-2v4H3V3z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="p-4 border-t-2 border-yellow-700 text-center flex-shrink-0">
          <button
            onClick={handleClose}
            className="w-full md:w-1/2 px-6 py-2 rounded-lg font-bold bg-yellow-800 text-yellow-200 hover:bg-yellow-700 transition mx-auto cursor-pointer"
            aria-label="Entendi e Fechar"
          >
            Fechar
          </button>
        </footer>
      </div>
    </div>
  );
};

export { AboutModal };
