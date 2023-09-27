import './App.css';
import Keyboards from '../UI/Keyboards';
import Viewer from '../UI/Viewer';

import './App.css';

function App() {
  return (
    <main id="main">
      <div className="calculator">
        <Viewer />
        <Keyboards />
      </div>
    </main>
  );
}

export default App;
