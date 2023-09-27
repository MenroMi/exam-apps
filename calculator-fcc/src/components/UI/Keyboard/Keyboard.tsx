import {FC, memo} from 'react';
import './Keyboard.css';

interface IKeyboardProps {
  id: string;
  className: string;
  type: string;
  keyboard: string | number;
  handleClick: (content: string, type: string) => void;
}
const Keyboard: FC<IKeyboardProps> = memo(
  ({id, className, keyboard, type, handleClick}) => {
    return (
      <li
        id={id}
        onClick={e => {
          const target = e.target as HTMLLIElement;

          if (target.className === 'multiply') {
            return handleClick('*', type);
          }
          return handleClick(
            (e.target as HTMLLIElement).textContent as string,
            type,
          );
        }}
        className={className}
      >
        {keyboard}
      </li>
    );
  },
);

export default Keyboard;
