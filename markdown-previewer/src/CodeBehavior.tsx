import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import type {SyntaxHighlighterProps} from 'react-syntax-highlighter';
import {FC} from 'react';

export const CodeBehavior: FC<SyntaxHighlighterProps> = ({
  children,
  language = 'javascript',
  wrapLongLines = true,
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={docco}
      wrapLongLines={wrapLongLines}
    >
      {children}
    </SyntaxHighlighter>
  );
};
