import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

interface PROPS {
  AiOutput: string;
}

const WorkoutOutputSection = ({ AiOutput }: PROPS) => {
  const editorRef: any = useRef();

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(AiOutput);
    }
  }, [AiOutput]);

  const handleChange = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
    }
  };

  const handleCopy = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      navigator.clipboard.writeText(editorInstance.getMarkdown());
    }
  };

  return (
    <div className="col-span-3 shadow-lg border">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold">AI Generated Result</h2>
        <Button className="gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your AI Generated result will appear here !"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={handleChange}
      />
    </div>
  );
};

export default WorkoutOutputSection;
