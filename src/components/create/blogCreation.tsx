import React from "react";
import { Toolbar } from "./toolbar";
import Editor from "./editor";

export default function BlogCreation() {
  return (
    <div className="h-[90vh] w-full bg-neutral-950 ml-auto rounded-lg relative flex flex-col overflow-hidden mb-5">
      <Toolbar />
      <div className="w-full h-full overflow-y-scroll custom-scrollbar">
        <Editor />
      </div>
    </div>
  );
}
