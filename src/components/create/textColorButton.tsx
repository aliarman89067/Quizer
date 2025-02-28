import { useEditor } from "@/context/store";
import { ColorResult, SketchPicker } from "react-color";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const TextColorButton = () => {
  const { editor } = useEditor();
  const [value, setValue] = useState(
    editor?.getAttributes("textStyle").color || "#ffffff"
  );

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
    setValue(color.hex);
  };
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm border border-white px-1.5 overflow-hidden text-sm">
                <span className="text-sm text-white">A</span>
                <div
                  style={{ backgroundColor: value }}
                  className="h-0.5 w-full"
                />
              </button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <TooltipContent>
            <p>Color</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="p-2.5">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
