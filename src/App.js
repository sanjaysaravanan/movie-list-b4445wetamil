import './App.css';

import Header from './Layout/Header';
import Content from './Layout/Content';

function App() {
  return (
    <div className="App">
      <Header wishCount={0} />
      <Content />
    </div>
  );
}

export default App;
