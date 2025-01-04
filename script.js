const input = document.getElementById("markdown-input")
const preview = document.getElementById("markdown-preview")

function updatePreview(){
    const markdownText = input.value;
    preview.innerHTML = marked.parse(markdownText);// it will convert markdown  to html
}

input.addEventListener("input", updatePreview);

const defaultMarkdown = `# Welcome to Markdown Previewer 
Type some **Markdown** here to see it rendered in real time!

-This is a list
- Another list item

\`\`\`javascript
//Code block example
function hello(){
console.log("Hello, world!");
}
\`\`\`

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz 

[Visit Maharufh](https://MaharufhALi)
`;

input.value = defaultMarkdown;
updatePreview();