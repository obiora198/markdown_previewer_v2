import { marked } from "marked";
import { useState } from "react";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

marked.use({
    breaks: true,
    gfm: true,
});

export default function Home() {
  const [text,setText] = useState('');

  return (
    <div className='w-full flex flex-col items-center justify center gap-4 px-4 mt-6'>
        <div className='w-[600px] shadow-md shadow-black border border-solid border-black'>
            <div className='w-full h-10 flex items-center justify-center bg-sky-300 border-b border-solid border-black'>
                <h3 className='font-bold'>Editor</h3>
            </div>
            <textarea
            name='text'
            id='text'
            className='w-full h-[200px] p-2 focus:outline-0 text-sm'
            value={text}
            onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <div className='w-[800px] shadow-md shadow-black border border-solid border-black mb-6'>
            <div className='w-full h-10 flex items-center justify-center bg-sky-300 border-b border-solid border-black'>
                <h3 className='font-bold'>Preview</h3>
            </div> 
            <Preview markdown={text} />
        </div>
    </div>
  )
}

function Preview({ markdown }) {
  const renderer = new marked.Renderer();
  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
    })
  );

  return <div
  
    dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer:renderer}),
    }}
    className='px-4 py-6'
  >

  </div>
}
