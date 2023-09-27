import React, {FC, createContext, useContext, useState} from 'react';

interface ICalculatorContext {
  wholeExpression: string;
  actualExpression: string;
  setActualExpression: React.Dispatch<React.SetStateAction<string>>;
  setWholeExpression: React.Dispatch<React.SetStateAction<string>>;
}

interface ICalculatorProvider {
  children: React.ReactNode;
}

const CalculatorContext = createContext<ICalculatorContext>({
  wholeExpression: '',
  actualExpression: '0',
  setActualExpression: () => {},
  setWholeExpression: () => {},
});

export const CalculatorProvider: FC<ICalculatorProvider> = ({children}) => {
  const [wholeExpression, setWholeExpression] = useState<string>('');
  const [actualExpression, setActualExpression] = useState<string>('0');

  return (
    <CalculatorContext.Provider
      value={{
        actualExpression,
        wholeExpression,
        setActualExpression,
        setWholeExpression,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useViewExpression = () => useContext(CalculatorContext);
