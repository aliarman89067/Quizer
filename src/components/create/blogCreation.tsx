"use client";
import React, { useState } from "react";
import { Toolbar } from "./toolbar";
import Editor from "./editor";
import BlogDetails from "./BlogDetails";
import QuizCreation from "./QuizCreation";

export default function BlogCreation() {
  const [step, setStep] = useState(0);
  return (
    <>
      {step === 0 && <BlogDetails step={step} setStep={setStep} />}
      {step === 1 && (
        <div className="h-[85vh] w-full bg-neutral-950 ml-auto rounded-lg relative flex flex-col overflow-hidden mb-5">
          <Toolbar />
          <div className="w-full h-full overflow-y-scroll custom-scrollbar">
            <Editor step={step} setStep={setStep} />
          </div>
        </div>
      )}
      {step === 2 && <QuizCreation />}
    </>
  );
}
