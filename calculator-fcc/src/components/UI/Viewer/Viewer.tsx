import './Viewer.css';
import {useViewExpression} from '../../../provider/CalculatorProvider';

const Viewer = () => {
  const {actualExpression, wholeExpression} = useViewExpression();

  return (
    <div className="viewer">
      <p className="viewer__whole-output">{wholeExpression}</p>
      <p id="display" className="viewer__actual-output">
        {actualExpression}
      </p>
    </div>
  );
};

export default Viewer;
