import ReactMarkdown from 'react-markdown';

type SuggestionItemProps = {
  text: string;
  onClick: () => void;
};

const SuggestionItem = ({ text, onClick }: SuggestionItemProps) => (
  <li
    onClick={onClick}
    className="p-2 border border-gray-600 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-150 cursor-pointer text-sm font-medium shadow-inner"
  >
    <div className="flex items-center">
      <span className="font-bold text-yellow-500 mr-2 flex-shrink-0">➜</span>
      <div className="prose prose-xs prose-invert overflow-hidden">
        <ReactMarkdown allowedElements={['strong', 'em', 'p']}>
          {text}
        </ReactMarkdown>
      </div>
    </div>
  </li>
);

export { SuggestionItem };
