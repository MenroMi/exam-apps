import useDrumStore from '../../../../store/store';
import './Screen.css';

const Screen = () => {
  const isPower = useDrumStore(state => state.isPower);
  const screen = useDrumStore(state => state.actualScreen);

  return (
    <div className="screen">
      <p>{isPower && screen ? screen : '...'}</p>
    </div>
  );
};

export default Screen;
