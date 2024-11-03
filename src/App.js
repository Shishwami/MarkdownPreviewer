import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <div id="editor-container">
          <textarea id="editor"></textarea>
        </div>
        <div id="preview-container">
          <div id="preview"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
