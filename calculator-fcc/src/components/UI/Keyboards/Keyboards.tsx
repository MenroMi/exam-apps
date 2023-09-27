import {useState} from 'react';
import {keyboards, mathExpressions} from '../../../constants';
import {useViewExpression} from '../../../provider/CalculatorProvider';
import {KEYBOARD_TYPES} from '../../../types';
import Keyboard from '../Keyboard';
import {isStart, toFixed} from '../../../helpers';

import './Keyboards.css';

const Keyboards = () => {
  const [leftOperand, setLeftOperand] = useState<string>('');
  const [operation, setOperation] = useState<string>('');
  const [rightOperand, setRightOperand] = useState<string>('');
  const {
    setActualExpression,
    setWholeExpression,
    actualExpression,
    wholeExpression,
  } = useViewExpression();

  const onReset = () => {
    setActualExpression('0');
    setWholeExpression('');
    setLeftOperand('');
    setRightOperand('');
    setOperation('');
  };

  const onEqual = () => {
    const result: string = toFixed(
      String(mathExpressions[operation](+leftOperand, +rightOperand)),
    );

    if (isNaN(parseInt(result))) {
      setWholeExpression('');
      setActualExpression('Error');
      setLeftOperand('');
    } else {
      setWholeExpression(prev => prev + '=' + result);
      setActualExpression(String(result));
      setLeftOperand(String(result));
    }

    setRightOperand('');
    setOperation('');
  };

  const handleIntegers = (
    isFirstOperand: boolean,
    content: string,
    setContent: (prev: string) => string,
  ) => {
    console.log(leftOperand, operation, rightOperand);
    if (isFirstOperand) {
      setActualExpression(content);
      setWholeExpression(content);
    } else {
      setActualExpression(
        operation && rightOperand.length === 0 ? content : setContent,
      );
      setWholeExpression(setContent);
    }

    if (operation) {
      setRightOperand(setContent);
    } else {
      setLeftOperand(setContent);
    }
  };

  const handleOperations = (
    isFirstOperand: boolean,
    content: string,
    setContent: (prev: string) => string,
  ) => {
    if (!operation && leftOperand.length === 0 && content === '-') {
      setActualExpression(content);
      setWholeExpression(content);
      setLeftOperand(setContent);
      return;
    } else if (!operation && leftOperand.length > 1 && content === '-') {
      setActualExpression(content);
      setWholeExpression(setContent);
      setOperation(content);
      return;
    } else if (
      operation &&
      leftOperand.length > 1 &&
      rightOperand.length === 0 &&
      content === '-'
    ) {
      setActualExpression(content);
      setWholeExpression(setContent);
      setRightOperand(content);
      return;
    }

    if (
      !isFirstOperand &&
      leftOperand !== '-' &&
      leftOperand !== '.' &&
      !operation
    ) {
      setOperation(content);
      setActualExpression(content);
      setWholeExpression(setContent);
    }
  };

  const handleDots = (setDot: (prev: string) => string) => {
    if (!operation && !leftOperand.includes('.')) {
      setActualExpression(setDot);
      setWholeExpression(setDot);
      setLeftOperand(setDot);
    }

    if (
      operation &&
      (rightOperand.length === 0 || !rightOperand.includes('.'))
    ) {
      setActualExpression(setDot);
      setWholeExpression(setDot);
      setRightOperand(setDot);
    }
  };

  const handleClick = (content: string, type: string): void => {
    const isFirstOperand = isStart(actualExpression);
    const setContent = (prev: string) => prev + content;
    const setDot = (prev: string) => prev + '.';

    if (wholeExpression.includes('=')) setWholeExpression(actualExpression);
    if (actualExpression.length >= 9 && type === KEYBOARD_TYPES.INTEGER) return;

    switch (type) {
      case KEYBOARD_TYPES.INTEGER:
        return handleIntegers(isFirstOperand, content, setContent);
      case KEYBOARD_TYPES.OPERATION:
        return handleOperations(isFirstOperand, content, setContent);
      case KEYBOARD_TYPES.RESET:
        return onReset();
      case KEYBOARD_TYPES.DOT:
        return handleDots(setDot);
      case KEYBOARD_TYPES.EQUAL:
        leftOperand && operation && rightOperand && onEqual();
        break;
    }
  };

  return (
    <div className="keyboards-container">
      <ul className="keyboards">
        {keyboards.map(({key, ...rest}) => (
          <Keyboard handleClick={handleClick} key={key} id={key} {...rest} />
        ))}
      </ul>
    </div>
  );
};

export default Keyboards;
