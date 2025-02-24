import { blogsCardsData } from "@/constants/data";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <section className="flex flex-col items-center gap-5 mt-16">
      <h1 className="font-semibold text-white text-xl text-center">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[90%]">
        {blogsCardsData.map((item) => (
          <div
            key={item.id}
            className="rounded-md relative p-2 bg-gray-600 overflow-hidden"
          >
            <div className="absolute -top-[55px] -left-[55px] w-[150px] h-[150px] bg-white/60 rounded-full blur-2xl pointer-events-none select-none" />
            <div className="relative w-full px-2.5 py-2 rounded-md flex flex-col bg-primary overflow-hidden">
              <div className="h-[180%] w-6 absolute -top-[30%] left-1/2 transform -translate-x-1/2 bg-white/20 rotate-45 blur-2xl pointer-events-none select-none" />
              <div className="flex items-center gap-2 transform -translate-x-[17px]">
                <div className="h-8 w-12 bg-white rounded-tr-full rounded-br-full flex items-center justify-center">
                  <span className="font-extralight text-sm text-primary">
                    {item.id}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-base">
                  {item.languageName}
                </h3>
              </div>
              <div className="w-full h-[1px] bg-white/20 my-4" />
              <div className="flex flex-col gap-2 ml-10">
                {item.blogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href="/"
                    className="font-light text-white text-base flex items-center"
                  >
                    <span>{blog.id}. </span>
                    {blog.name}
                    <MoveRight className="size-6 ml-3 text-white/60" />
                  </Link>
                ))}
              </div>
              <div className="w-full h-[1px] bg-white/20 my-4" />

              <Link
                href="/"
                className="font-light text-white/80 text-base ml-10"
              >
                See All Blogs (40)
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
