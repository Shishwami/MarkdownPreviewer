import { marked } from 'marked';

function Preview({ markdown }) {
    return (
        <div id="preview-container" className="box">
            <h1 className="title">Preview</h1>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
    );
}

export default Preview;