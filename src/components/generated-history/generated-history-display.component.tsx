import { useEffect, useRef, useState } from 'react';
import { useStoryGenerator } from '../../hooks';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyButton } from '../copy-btn/copy-btn.component';
import { DownloadButton } from '../download-btn/download-btn.component';
import { cleanStoryContent } from '../../utils';

type GeneratedStoryDisplayProps = {
  isFinished: boolean;
};

const GeneratedStoryDisplay: React.FC<GeneratedStoryDisplayProps> = ({
  isFinished,
}) => {
  const { story, loading, error, generateStory } = useStoryGenerator();

  const storyContentRef = useRef<HTMLDivElement>(null);
  const [isRefAttached, setIsRefAttached] = useState(false);

  useEffect(() => {
    if (isFinished && !story && !loading) {
      generateStory();
    }
  }, [isFinished, story, loading, generateStory]);

  useEffect(() => {
    if (story && storyContentRef.current && !isRefAttached) {
      setIsRefAttached(true);
    }
  }, [story, isRefAttached]);

  if (!isFinished) {
    return null;
  }

  if (error) {
    return (
      <div className="p-4 sm:p-8 bg-red-100 text-red-900 font-bold text-center border-t-4 border-red-500 rounded-lg shadow-lg">
        <h2>❌ Erro Crítico de Geração ❌</h2>
        <p className="mt-2 text-sm">
          Não foi possível conectar com o Servidor de IA.
        </p>
        <p className="mt-1 text-xs opacity-80">Detalhe: {error}</p>
      </div>
    );
  }

  if (loading || !story) {
    return (
      <div className="p-4 sm:p-8 text-center bg-amber-100 text-amber-900 border-t-8 border-amber-500 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold animate-pulse">
          🔮 O Oráculo está conjurando sua aventura...
        </h2>
        <p className="text-sm mt-2">
          Construindo o roteiro final (Isso pode levar alguns segundos)...
        </p>
      </div>
    );
  }

  const finalStory = cleanStoryContent(story);
  const markdownComponents = {
    h2: ({ ...props }) => (
      <h2
        className="text-2xl sm:text-3xl font-serif font-bold mt-6 sm:mt-8 mb-4 text-amber-800 border-b border-amber-700 pb-2"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3
        className="text-xl sm:text-2xl font-serif italic mt-4 sm:mt-6 mb-3 text-stone-700"
        {...props}
      />
    ),
    p: ({ ...props }) => (
      <p className="mb-4 leading-relaxed text-stone-700 text-lg" {...props} />
    ),
    strong: ({ ...props }) => (
      <strong className="font-extrabold text-stone-900 text-lg" {...props} />
    ),
    ul: ({ ...props }) => (
      <ul
        className="list-disc ml-6 sm:ml-8 mb-4 space-y-1 text-stone-700 text-lg"
        {...props}
      />
    ),
    code: ({ ...props }) => (
      <code
        className="bg-stone-200 text-red-700 p-1 rounded text-sm font-mono"
        {...props}
      />
    ),
    hr: ({ ...props }) => (
      <hr className="my-6 border-amber-900 border-opacity-50" {...props} />
    ),
    table: ({ ...props }) => (
      <table
        className="w-full text-left border-collapse my-6 border border-amber-700 shadow-inner"
        {...props}
      />
    ),
    th: ({ ...props }) => (
      <th
        className="p-3 border-b border-amber-700 bg-amber-200 text-amber-900 font-serif font-bold text-sm uppercase tracking-wider"
        {...props}
      />
    ),
    td: ({ ...props }) => (
      <td className="p-3 border-b border-amber-300 text-stone-700" {...props} />
    ),
  };

  return (
    <div
      ref={storyContentRef}
      className="p-4 sm:p-8 bg-amber-50 text-stone-900 border-t-8 border-amber-900 shadow-2xl rounded-lg"
    >
      <header className="mb-6 border-b border-amber-700 pb-4">
        <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-center mb-2 text-amber-900">
          📜 Seu Roteiro RPG (One-Shot) 📜
        </h2>
        <p className="text-base sm:text-lg font-serif italic text-stone-600 text-center">
          Com base nas suas 9 respostas e nas regras do sistema.
        </p>
      </header>

      <main className="bg-white p-4 sm:p-6 rounded-lg shadow-inner mb-6 border border-amber-200">
        <div className="leading-relaxed font-serif overflow-x-auto">
          <ReactMarkdown
            components={markdownComponents}
            remarkPlugins={[remarkGfm]}
          >
            {finalStory}
          </ReactMarkdown>
        </div>
      </main>

      <footer className="flex flex-col sm:flex-row justify-center gap-4 pt-4 border-t border-amber-700">
        <CopyButton
          textToCopy={story}
          buttonText="Copiar Roteiro"
          className="w-full sm:w-auto sm:max-w-[48%] flex-grow justify-center py-2 px-4 mb-6 border-b border-gray-700"
        />
        <DownloadButton
          targetRef={storyContentRef}
          fileName={`roteiro_rpg_${new Date().toISOString().slice(0, 10)}.pdf`}
          key={isRefAttached ? 'enabled-download' : 'disabled-download'}
          className="w-full sm:w-auto sm:max-w-[48%] flex-grow justify-center mb-6 border-b border-gray-700"
        />
      </footer>
    </div>
  );
};

export { GeneratedStoryDisplay };
