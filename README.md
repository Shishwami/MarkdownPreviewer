# Markdown Previewer

This project is a Markdown previewer app inspired by [FreeCodeCamp's Markdown Previewer](https://markdown-previewer.freecodecamp.rocks/). It was built with a focus on fulfilling specific user stories to ensure functional completeness and responsiveness.

## Project Overview

The app includes a markdown editor and a previewer section that dynamically renders the markdown syntax as HTML. It uses the `marked` library to parse markdown and `Highlight.js` for syntax highlighting in code blocks, enhancing the readability of code snippets.

## Features

- **Live Preview**: As you type in the editor, the previewer section displays the rendered HTML in real-time.
- **GitHub-Flavored Markdown**: Supports GitHub-flavored markdown syntax, including headings, links, code blocks, lists, and more.
- **Syntax Highlighting**: Uses Highlight.js to apply syntax highlighting for code blocks.
- **Initial Content**: When loaded, the editor includes a default set of markdown examples, covering essential elements like headings, lists, code, and more.
- **Optional Line Break Handling**: Interprets carriage returns and can render them as `<br>` elements.

## Technologies Used

- **React**: Frontend framework for a responsive and modular UI.
- **Sass**: For styling the app, enhancing CSS with variables and nested syntax.
- **Marked.js**: JavaScript library for parsing markdown into HTML.
- **Highlight.js**: JavaScript library for syntax highlighting in code blocks.

## Getting Started

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the app locally.

Alternatively, you can view the live version of the project at [this link](https://shishwami.github.io/MarkdownPreviewer/).

## Usage

1. Type in the **Editor** section.
2. Watch the **Preview** update with the rendered HTML instantly, with code blocks automatically highlighted.

## Dependencies

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Marked.js](https://cdnjs.com/libraries/marked)
- [Highlight.js](https://highlightjs.org/)

## Credits
This Markdown Previewer project is part of the [FreeCodeCamp Frontend Certification](https://www.freecodecamp.org/learn/front-end-libraries/) course. It was completed as one of the required projects in the curriculum.

FreeCodeCamp (FCC) is a nonprofit organization that offers a comprehensive web development curriculum and certifications. The Frontend Certification focuses on frontend libraries and frameworks like React, and it covers various topics including HTML, CSS, JavaScript, and more.

Learn more about FreeCodeCamp and their educational programs on their official website: [https://www.freecodecamp.org/](https://www.freecodecamp.org/)