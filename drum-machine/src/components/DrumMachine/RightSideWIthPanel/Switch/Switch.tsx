import './Switch.css';

interface ISwitchProps {
  label: string;
  setState: () => void;
  isPower?: boolean;
}

const Switch = ({label, setState, isPower}: ISwitchProps) => {
  return (
    <div id={label.toLowerCase()} className="switch-container">
      <p className="label-switch">{label}</p>
      <div className="toggle-switch">
        <input
          disabled={label === 'Bank' && !isPower}
          type="checkbox"
          name={label}
          id={label}
          className="checkbox"
          onClick={setState}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default Switch;
