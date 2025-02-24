import { useEditor } from "@/context/store";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ColorResult, SketchPicker } from "react-color";

export const HighLightColorButton = () => {
  const { editor } = useEditor();
  const [value, setValue] = useState(
    editor?.getAttributes("highlight").color || "#ffffff"
  );

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
    setValue(color.hex);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm border border-white px-1.5 overflow-hidden text-sm">
          <span className="text-sm text-white">A</span>
          <div style={{ backgroundColor: value }} className="h-0.5 w-full" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
