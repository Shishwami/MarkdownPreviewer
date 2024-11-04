import { marked } from 'marked';

function Preview({markdown}) {
    return (<div id="preview-container">
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </div>);
}

export default Preview;