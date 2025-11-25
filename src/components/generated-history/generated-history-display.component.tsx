import { useEffect, useRef } from 'react';
import { useStoryGenerator } from '../../hooks';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyButton } from '../copy-btn/copy-btn.component';
import { DownloadButton } from '../download-btn/download-btn.component';

type GeneratedStoryDisplayProps = {
  isFinished: boolean;
};

const GeneratedStoryDisplay: React.FC<GeneratedStoryDisplayProps> = ({
  isFinished,
}) => {
  const { story, loading, error, generateStory } = useStoryGenerator();

  // 3. Criar a Referência para o Contêiner Completo
  // Vamos usar a referência no contêiner principal para capturar TUDO para o PDF.
  const storyContentRef = useRef<HTMLDivElement>(null); // Efeito para disparar a geração (Mantido)

  useEffect(() => {
    if (isFinished && !story && !loading) {
      generateStory();
    }
  }, [isFinished, story, loading, generateStory]); // Lógica de Erro / Loading (Mantido)

  if (!isFinished) {
    return null;
  }
  if (error) {
    return (
      <div className="p-8 bg-red-800 text-white font-bold text-center border-t-4 border-red-500">
        <h2>❌ Erro Crítico de Geração ❌</h2>
        <p className="mt-2 text-sm">
          Não foi possível conectar com o Servidor de IA.
        </p>
        <p className="mt-1 text-xs opacity-75">Detalhe: {error}</p>
      </div>
    );
  }
  if (loading || !story) {
    return (
      <div className="p-8 text-center bg-gray-900 text-yellow-400 border-t-8 border-yellow-500">
        <h2 className="text-xl font-bold animate-pulse">
          🔮 O Oráculo está conjurando sua aventura...
        </h2>
        <p className="text-sm mt-2">
          Construindo o roteiro final (Isso pode levar alguns segundos)...
        </p>
      </div>
    );
  } // Definição dos estilos Tailwind para os elementos Markdown (Adicionei estilos de tabela para compatibilidade GFM)

  const markdownComponents = {
    h2: ({ ...props }) => (
      <h2
        className="text-3xl font-extrabold mt-8 mb-4 text-yellow-400 border-b border-indigo-500 pb-2"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3 text-indigo-300" {...props} />
    ),
    p: ({ ...props }) => (
      <p className="mb-4 leading-relaxed text-gray-200" {...props} />
    ),
    strong: ({ ...props }) => (
      <strong className="font-extrabold text-white" {...props} />
    ),
    ul: ({ ...props }) => (
      <ul className="list-disc ml-8 mb-4 space-y-1 text-gray-300" {...props} />
    ),
    code: ({ ...props }) => (
      <code
        className="bg-gray-700 text-red-400 p-1 rounded text-sm"
        {...props}
      />
    ),
    hr: ({ ...props }) => <hr className="my-6 border-indigo-700" {...props} />,
    // Estilos de tabela adicionados para ReactMarkdown + remarkGfm
    table: ({ ...props }) => (
      <table className="w-full text-left border-collapse my-6" {...props} />
    ),
    th: ({ ...props }) => (
      <th
        className="p-3 border-b border-indigo-500 bg-indigo-900 text-yellow-400 font-semibold text-sm uppercase tracking-wider"
        {...props}
      />
    ),
    td: ({ ...props }) => (
      <td className="p-3 border-b border-gray-700 text-gray-200" {...props} />
    ),
  }; // Se a história foi gerada com sucesso

  return (
    // 4. Anexar a referência ao contêiner principal
    <div
      ref={storyContentRef}
      className="p-8 bg-gray-900 text-white border-t-8 border-yellow-500"
    >
      {/* 1. HEADER BLOCK (Mantido) */}
      <header className="mb-6 border-b border-gray-700 pb-4">
        <h2 className="text-4xl font-extrabold text-center mb-2 text-yellow-400">
          ✨ Seu Roteiro RPG (One-Shot) ✨
        </h2>
        <p className="text-lg font-mono text-indigo-300 text-center">
          Com base nas suas 9 respostas e nas regras do sistema.
        </p>
      </header>
      {/* 2. BODY BLOCK (Conteúdo da História) - Não precisa mais de 'ref' aqui */}
      <main className="bg-gray-800 p-6 rounded-lg shadow-xl mb-6">
        <div className="leading-relaxed">
          <ReactMarkdown
            components={markdownComponents}
            remarkPlugins={[remarkGfm]}
          >
            {story}
          </ReactMarkdown>
        </div>
      </main>
      {/* 3. FOOTER BLOCK (Botões de Copiar e Download) */}
      <footer className="flex flex-col sm:flex-row justify-center gap-4 pt-4 border-t border-gray-700">
        {/* Botão de Copiar */}
        <CopyButton
          textToCopy={story}
          buttonText="Copiar Roteiro"
          // Classes responsivas e flex-grow
          className="w-full sm:w-auto sm:max-w-[48%] flex-grow justify-center"
        />
        {/* Botão de Download PDF */}
        <DownloadButton
          targetRef={storyContentRef} // 👈 Passa a referência do conteúdo completo
          fileName={`roteiro_rpg_${new Date().toISOString().slice(0, 10)}.pdf`}
          // Classes responsivas e flex-grow
          className="w-full sm:w-auto sm:max-w-[48%] flex-grow justify-center"
        />
      </footer>
    </div>
  );
};

export { GeneratedStoryDisplay };
