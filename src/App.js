import './App.css';
import { useState } from 'react';
import Footer from './Components/Footer';
import Editor from './Components/Editor';
import Preview from './Components/Preview';
import ToggleButton from './Components/ToggleButton ';

class MarkdownData {
  static defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

}
function App() {

  const [markdown, setMarkdown] = useState(MarkdownData.defaultMarkdown);

  const updateMarkdown = (event) => {
    setMarkdown(event.target.value);
  }

  return (
    <div className="App">
      <div id="wrapper">
        
        <div id="main-content">
          <Editor updateMarkdown={updateMarkdown} markdown={markdown} />
          <Preview markdown={markdown} />
        </div>
<Footer >
          <div id="btn-container">
            <ToggleButton name={"Editor"} id={"editor-container"} />
            <ToggleButton name={"Preview"} id={"preview-container"} />
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default App;
