import './DrumMachine.css';
import {Keyboards} from './LeftSideWithKeys';
import Panel from './RightSideWIthPanel/Panel/Panel';

const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <h1 className="drum-machine__title">Drum Machine</h1>

      <main className="drum-machine__main">
        <Keyboards />
        <Panel />
      </main>
    </div>
  );
};

export default DrumMachine;
