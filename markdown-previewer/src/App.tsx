import {useState} from 'react';
import './App.css';
import Editor from './Editor';
import Result from './Result';
import {IExtendWindow} from './types';

function App() {
  const [extendWindow, setExtendWindow] = useState<IExtendWindow>({
    editorExtended: false,
    resultExtended: false,
  });

  const onExtendWindow = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.SyntheticEvent<HTMLElement>,
  ) => {
    let target: HTMLButtonElement | HTMLElement = e.target as HTMLElement;

    if (
      !(e.target instanceof HTMLButtonElement) &&
      target.closest('button')?.className === 'extend-btn'
    ) {
      target = target.closest('button') as HTMLButtonElement;
    } else if (
      !(e.target instanceof HTMLButtonElement) &&
      target.closest('button')?.className !== 'extend-btn'
    ) {
      return;
    }

    const dataAttributes = target.dataset;

    if (dataAttributes.editor) {
      setExtendWindow({
        editorExtended: !extendWindow.editorExtended,
        resultExtended: false,
      });
      return;
    }

    if (dataAttributes.result) {
      setExtendWindow({
        editorExtended: false,
        resultExtended: !extendWindow.resultExtended,
      });
      return;
    }
  };

  return (
    <section id="markdown">
      <header id="markdown__header">
        <h1>Markdown Previewer</h1>
        <p>package: react-markdown, react-syntax-highlighter</p>
      </header>
      <main id="markdown__main">
        <Editor
          onExtendWindow={onExtendWindow}
          isExtend={extendWindow.editorExtended}
        />
        <Result
          onExtendWindow={onExtendWindow}
          isExtend={extendWindow.resultExtended}
        />
      </main>
    </section>
  );
}

export default App;
