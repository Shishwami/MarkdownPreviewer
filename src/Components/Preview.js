import { marked } from 'marked';

function Preview({ markdown }) {
    return (
        <div id="preview-container">
            <h1>Preview</h1>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
    );
}

export default Preview;