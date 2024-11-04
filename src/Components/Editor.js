function Editor({ updateMarkdown, markdown }) {
    return (
        <div id="editor-container" className="box">
            <h1 className="title">Editor</h1>
            <textarea id="editor" onChange={updateMarkdown} value={markdown}></textarea>
        </div>
    );
}

export default Editor;