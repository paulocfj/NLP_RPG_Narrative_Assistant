import { useEffect } from 'react';
import { useStoryGenerator } from '../../hooks';
import ReactMarkdown from 'react-markdown'; // 1. Import do Renderizador
import remarkGfm from 'remark-gfm'; // 2. Import do Plugin GFM (para tabelas, etc.)

type GeneratedStoryDisplayProps = {
  isFinished: boolean;
};

const GeneratedStoryDisplay: React.FC<GeneratedStoryDisplayProps> = ({
  isFinished,
}) => {
  const { story, loading, error, generateStory } = useStoryGenerator();

  // Efeito para disparar a geração quando o questionário terminar
  useEffect(() => {
    // Dispara a geração APENAS se estiver finalizado, a história ainda não foi gerada
    // e não estiver atualmente carregando
    if (isFinished && !story && !loading) {
      generateStory();
    }
  }, [isFinished, story, loading, generateStory]);

  if (!isFinished) {
    return null; // Não mostra nada até que o guia esteja completo
  }

  // Se a geração falhou
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

  // Se estiver carregando
  if (loading || !story) {
    return (
      <div className="p-8 text-center bg-gray-700 text-yellow-400">
        <h2 className="text-xl font-bold animate-pulse">
          🔮 O Oráculo está conjurando sua aventura...
        </h2>
        <p className="text-sm mt-2">
          Construindo o roteiro final (Isso pode levar alguns segundos)...
        </p>
      </div>
    );
  }

  // Definição dos estilos Tailwind para os elementos Markdown
  const markdownComponents = {
    // Títulos de seção principal
    h2: ({ ...props }) => (
      <h2
        className="text-3xl font-extrabold mt-8 mb-4 text-yellow-400 border-b border-indigo-500 pb-2"
        {...props}
      />
    ),
    // Subtítulos
    h3: ({ ...props }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3 text-indigo-300" {...props} />
    ),
    // Parágrafos
    p: ({ ...props }) => (
      <p className="mb-4 leading-relaxed text-gray-200" {...props} />
    ),
    // Negrito
    strong: ({ ...props }) => (
      <strong className="font-extrabold text-white" {...props} />
    ),
    // Listas (para listas de regras ou pontos de cena)
    ul: ({ ...props }) => (
      <ul className="list-disc ml-8 mb-4 space-y-1 text-gray-300" {...props} />
    ),
    // Códigos inline
    code: ({ ...props }) => (
      <code
        className="bg-gray-700 text-red-400 p-1 rounded text-sm"
        {...props}
      />
    ),
    // Regras de separação
    hr: ({ ...props }) => <hr className="my-6 border-indigo-700" {...props} />,
  };

  // Se a história foi gerada com sucesso
  return (
    <div className="p-8 bg-gray-900 text-white border-t-8 border-yellow-500">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-yellow-400">
        ✨ Seu Roteiro RPG (One-Shot) ✨
      </h2>
      <p className="text-lg font-mono mb-6 text-indigo-300 text-center">
        Com base nas suas 9 respostas e nas regras do sistema.
      </p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        {/* O whitespace-pre-wrap foi removido daqui e será tratado pelo ReactMarkdown */}
        <div className="leading-relaxed">
          <ReactMarkdown
            components={markdownComponents} // Aplica os estilos Tailwind
            remarkPlugins={[remarkGfm]} // Habilita funcionalidades extras do Markdown
          >
            {story}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export { GeneratedStoryDisplay };
