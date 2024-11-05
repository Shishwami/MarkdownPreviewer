import { useEffect } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

function Preview({ markdown }) {

    useEffect(() => {
        const blocks = document.querySelectorAll('pre code');
        blocks.forEach((block) => {
            hljs.highlightBlock(block);
        });
    }, [markdown]); 

    marked.setOptions({
        gfm: true,
        breaks: true,
        highlight: (code, lang) => {
            const language = lang || 'plaintext';
            return hljs.highlight(language, code).value;
        },
    });

    return (
        <div id="preview-container" className="box">
            <h1 className="title">Preview</h1>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
    );
}

export default Preview;