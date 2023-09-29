import {timeInspectors} from '../../constants';
import useClockStore from '../../zustand/store/store';
import {TimeInspector, Timer} from '../UI';
import './App.css';

function App() {
  const {breakTime, sessionTime} = useClockStore();

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">25 + 5 Clock</h1>
      </header>
      <main className="main">
        <div className="main__time-inspectors">
          {timeInspectors.map(({title, type, containerId, viewerId}) => (
            <TimeInspector
              key={type}
              containerId={containerId}
              viewerId={viewerId}
              title={title}
              viewer={type === 'break' ? breakTime : sessionTime}
              type={type}
            />
          ))}
        </div>
        <Timer />
      </main>
    </div>
  );
}

export default App;
