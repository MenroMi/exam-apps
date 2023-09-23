import {useEffect} from 'react';
import useDrumStore from '../../../../store/store';
import './Slider.css';

interface ISliderProps {
  isPower: boolean;
}

const Slider = ({isPower}: ISliderProps) => {
  const volume = useDrumStore(state => state.volume);
  const setVolume = useDrumStore(state => state.setVolume);
  const setActualScreen = useDrumStore(state => state.setActualScreen);

  useEffect(() => {
    const onSetVolumeOnScreen = () => setActualScreen('...');
    const setTimeoutVolume = setTimeout(onSetVolumeOnScreen, 500);
    return () => clearTimeout(setTimeoutVolume);
  }, [volume, setActualScreen]);

  return (
    <div className="slider">
      <input
        disabled={!isPower}
        type="range"
        max={100}
        value={volume}
        onChange={e => {
          setVolume(+e.target.value);
          setActualScreen('volume: ' + e.target.value + '%');
        }}
        min={1}
        className="slider__main"
        style={{cursor: isPower ? 'pointer' : 'default'}}
      />
    </div>
  );
};

export default Slider;
