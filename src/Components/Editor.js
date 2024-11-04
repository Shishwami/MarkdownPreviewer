function Editor({updateMarkdown,markdown}) {
    return (
        <div id="editor-container">
            <textarea id="editor" onChange={updateMarkdown} value={markdown}></textarea>
        </div>
    );
}

export default Editor;