"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { useEditor as useEditorStore } from "@/context/store";
import History from "@tiptap/extension-history";
import FontFamily from "@tiptap/extension-font-family";
import { FontSizeExtension } from "@/extensions/font-size";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";

export default function Editor() {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
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
    content: `<p>Hello World</p>`,
    editorProps: {
      attributes: {
        class: `focus:outline-none border-none flex flex-col pl-2 pt-4 pr-14 pb-10 cursor-text rounded-lg  text-white bg-neutral-950`,
      },
    },
  });
  return <EditorContent editor={editor} />;
}
