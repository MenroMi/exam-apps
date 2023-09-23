import useDrumStore from '../../../../store/store';
import {Screen} from '../Screen';
import {Slider} from '../Slider';
import {Switch} from '../Switch';
import './Panel.css';

const Panel = () => {
  const isPower = useDrumStore(state => state.isPower);
  const setIsBank = useDrumStore(state => state.setIsBank);
  const setIsPower = useDrumStore(state => state.setIsPower);

  return (
    <div id="panel">
      <Switch label="Power" setState={setIsPower} />
      <Screen />
      <Slider isPower={isPower} />
      <Switch label="Bank" setState={setIsBank} isPower={isPower} />
    </div>
  );
};

export default Panel;
