import './Button.css';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  id: string;
  src: string;
  alt: string;
  className: string;
  eventListener: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisable?: boolean;
}

const Button = ({
  id,
  src,
  alt,
  className,
  eventListener,
  isDisable,
}: IButtonProps) => {
  return (
    <button id={id} onClick={eventListener} disabled={isDisable ?? false}>
      <img src={src} alt={alt} className={className} />
    </button>
  );
};

export default Button;
