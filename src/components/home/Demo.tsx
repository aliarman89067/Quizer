import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Demo() {
  return (
    <section className="w-full h-screen flex flex-col items-center mt-16 gap-5">
      <h1 className="font-semibold text-white text-xl text-center">Guide</h1>
      <div className="flex flex-col lg:flex-row justify-between h-full w-full">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="font-bold text-white text-5xl">
            Quizer is not just a Blogging Site.
          </h1>
          <p className="font-light text-gray-200 text-base">
            Quizer isn't just a blogging site—it's a platform where you can read
            about programming languages and test your knowledge with quick
            quizzes. Learn, engage, and grow your coding skills!
          </p>
          <Button variant="secondary" size="lg" className="mr-auto">
            Let&apos;s Try
          </Button>
        </div>
        <div className="flex-1 flex items-center">
          <img src="/guide.png" alt="" className="h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
