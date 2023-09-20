import React, {FC, createContext, useContext, useEffect, useState} from 'react';
interface ITextareContext {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

interface ITextareaProviderProps {
  children: React.ReactNode;
}

const TextareaContext = createContext<ITextareContext>({
  markdown: '',
  setMarkdown: () => {},
});

export const TextareaProvider: FC<ITextareaProviderProps> = ({children}) => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    import('../data/defaultData.md').then(res => {
      fetch(res.default)
        .then(response => response.text())
        .then(text => setMarkdown(text));
    });
  }, []);
  return (
    <TextareaContext.Provider value={{markdown, setMarkdown}}>
      {children}
    </TextareaContext.Provider>
  );
};

export const useTextarea = () => useContext(TextareaContext);
