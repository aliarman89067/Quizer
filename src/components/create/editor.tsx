"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import {
  useEditor as useEditorStore,
  useInitialContent,
} from "@/context/store";
import History from "@tiptap/extension-history";
import FontFamily from "@tiptap/extension-font-family";
import { FontSizeExtension } from "@/extensions/font-size";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

interface EditorProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function Editor({ step, setStep }: EditorProps) {
  const { editor: tiptapEditor, setEditor } = useEditorStore();
  const { initialContent, setInitialContent } = useInitialContent();
  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
      if (tiptapEditor?.getHTML()) {
        setInitialContent(tiptapEditor.getHTML());
      }
    },
    onUpdate({ editor }) {
      setEditor(editor);
      if (tiptapEditor?.getHTML()) {
        setInitialContent(tiptapEditor.getHTML());
      }
    },
    onDestroy() {
      setEditor(null);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
      if (tiptapEditor?.getHTML()) {
        setInitialContent(tiptapEditor.getHTML());
      }
    },
    onFocus({ editor }) {
      setEditor(editor);
      if (tiptapEditor?.getHTML()) {
        setInitialContent(tiptapEditor.getHTML());
      }
    },
    onContentError({ editor }) {
      setEditor(editor);
      if (tiptapEditor?.getHTML()) {
        setInitialContent(tiptapEditor.getHTML());
      }
    },
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      FontSizeExtension,
      TextStyle,
      Underline,
      History,
      FontFamily,
      Color,
      Heading,
      Image,
      ImageResize,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: `focus:outline-none border-none flex flex-col pl-3 pt-4 pr-14 pb-10 cursor-text rounded-lg text-white bg-neutral-950`,
      },
    },
  });
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <EditorContent editor={editor} />
      <div className="space-x-4 pb-3 ml-4 flex items-center justify-center">
        <Button
          disabled={step === 0}
          onClick={() => setStep((prev) => (prev -= 1))}
          variant="secondary"
          size="lg"
        >
          Prev
        </Button>
        <Button
          disabled={step === 2}
          onClick={() => setStep((prev) => (prev += 1))}
          variant="secondary"
          size="lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
