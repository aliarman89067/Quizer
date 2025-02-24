"use client";

import Editor from "@/components/create/editor";
import { Toolbar } from "@/components/create/toolbar";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="h-[90vh] w-full bg-neutral-950 ml-auto rounded-lg relative flex flex-col overflow-hidden">
      <Toolbar />
      <div className="w-full h-full overflow-y-scroll custom-scrollbar">
        <Editor />
      </div>
      {/* <div className="rounded-lg w-full h-[50px] bg-black absolute left-0 bottom-0 flex items-center justify-start pl-5 gap-2">
        <Button variant="default">Prev</Button>
        <Button variant="default">Next</Button>
      </div> */}
    </div>
  );
}
