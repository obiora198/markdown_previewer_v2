import { marked } from "marked";
import { useState } from "react"; 



export default function Home() {
  const placeholder = 
`# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

  const [text,setText] = useState(placeholder);
  const markdown = marked.parse(text, {breaks:true});
  const renderer = new marked.Renderer();

  return (
    <div className='w-full flex flex-col items-center justify center gap-4 px-4 mt-6'>
        <div className='w-[600px] shadow-md shadow-black border border-solid border-black'>
            <div className='w-full h-10 flex items-center justify-center bg-sky-300 border-b border-solid border-black'>
                <h3 className='font-bold'>Editor</h3>
            </div>
            <textarea
            name='text'
            id='editor'
            className='w-full h-[200px] p-2 focus:outline-0 text-sm'
            value={text}
            onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <div className='w-[800px] shadow-md shadow-black border border-solid border-black mb-6'>
            <div className='w-full h-10 flex items-center justify-center bg-sky-300 border-b border-solid border-black'>
                <h3 className='font-bold'>Preview</h3>
            </div> 
            <div id="preview"
            className='px-4 py-6'
            dangerouslySetInnerHTML= {{ __html: marked(markdown, {renderer: renderer})}}
            />
            
        </div>
    </div>
  )
}
