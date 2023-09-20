import './Result.css';
import {useTextarea} from './provider/TextareaProvider';
import {ReactMarkdown} from 'react-markdown/lib/react-markdown';
import type {CodeComponent} from 'react-markdown/lib/ast-to-react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import {CodeBehavior} from './CodeBehavior';
import useWindowSize from './hooks/useWindowSize';

const Result = ({
  onExtendWindow,
  isExtend,
}: {
  onExtendWindow: React.MouseEventHandler<HTMLButtonElement>;
  isExtend: boolean;
}) => {
  const {markdown} = useTextarea();
  const {
    windowSize: {width},
  } = useWindowSize();
  return (
    <section
      className="result"
      style={{
        transition: 'all 300ms linear',
        width: width! > 800 ? (isExtend ? '100%' : '50%') : '100%',
        height: isExtend ? 'auto' : '100%',
      }}
    >
      <header className="result__header">
        <h2>Result</h2>
        <button
          className="extend-btn"
          data-result={isExtend}
          onClick={onExtendWindow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z" />
          </svg>
        </button>
      </header>

      <div
        className="result__markdown"
        style={{
          transition: 'all 300ms linear',
          overflowY: isExtend ? 'hidden' : 'scroll',
          height: isExtend ? 'auto' : '503px',
        }}
      >
        <ReactMarkdown
          children={markdown}
          components={{code: CodeBehavior as CodeComponent}}
          remarkPlugins={[remarkGfm]}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          rehypePlugins={[rehypeRaw as any, rehypeSanitize]}
        />
      </div>
    </section>
  );
};

export default Result;
