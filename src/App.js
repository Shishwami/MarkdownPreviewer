import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState("");

  const updateMarkdown = (event) => {
    setMarkdown(event.target.value);
  }

  return (
    <div className="App">
      <div id="wrapper">
        <div id="editor-container">
          <textarea id="editor" onChange={updateMarkdown}></textarea>
        </div>
        <div id="preview-container">
          <div id="preview">{markdown}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
