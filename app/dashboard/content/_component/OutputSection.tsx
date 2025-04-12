import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface props{
  aiOutput: string;
}
function OutputSection ({aiOutput}:props) {

  const editorRef:any=useRef('');

  useEffect(() => {
    
    const editorInstance=editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput); 
    
  }, [aiOutput]);

  return (
    <div className='shadow-md  rounded-lg border border-gray-100'>
      <div className='flex justify-between items-center p-3'>
        <h2 className='text-lg font-semibold'>Your Result</h2>
        <Button className='bg-gray-100 hover:bg-gray-300 cursor-pointer'
        onClick={()=>navigator.clipboard.writeText(aiOutput)}><Copy/>Copy</Button>
      </div>
       <Editor 
        ref={editorRef}
        initialValue="Your resule will apear here!"
        height="520px" 
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
    
  )
}

export default OutputSection