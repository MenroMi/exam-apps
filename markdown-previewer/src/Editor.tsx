import {useRef} from 'react';
import './Editor.css';
import {useTextarea} from './provider/TextareaProvider';
import useWindowSize from './hooks/useWindowSize';

const Editor = ({
  onExtendWindow,
  isExtend,
}: {
  onExtendWindow: React.MouseEventHandler<HTMLButtonElement>;
  isExtend: boolean;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const {markdown, setMarkdown} = useTextarea();
  const {
    windowSize: {width},
  } = useWindowSize();

  return (
    <section
      className="editor"
      style={{
        transition: 'all 300ms linear',
        width: width! > 800 ? (isExtend ? '100%' : '50%') : '100%',
        height: isExtend ? `${textareaRef.current?.scrollHeight}px` : '100%',
      }}
    >
      <header className="editor__header">
        <h2>Editor </h2>
        <button
          className="extend-btn"
          onClick={onExtendWindow}
          data-editor={isExtend}
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

      <textarea
        ref={textareaRef}
        className="textarea-editor"
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
        style={{
          minHeight: isExtend
            ? `${textareaRef.current?.scrollHeight}px`
            : '500px',
        }}
      ></textarea>
    </section>
  );
};

export default Editor;
