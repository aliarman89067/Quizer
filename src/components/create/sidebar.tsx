"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Sidebar() {
  const router = useRouter();
  const [hide, setHide] = useState(false);
  return (
    <>
      {hide && (
        <div
          onClick={() => setHide(false)}
          className={cn(
            "rounded-full flex items-center justify-center w-8 h-8 bg-neutral-800 opacity-50 hover:opacity-100 transition-opacity duration-200 ease-linear delay-200 cursor-pointer shrink-0"
          )}
        >
          <ChevronRight className="text-white size-5" />
        </div>
      )}
      <motion.div
        initial={{ width: "15vw", opacity: 1 }}
        animate={
          hide ? { width: "0%", opacity: 0 } : { width: "15vw", opacity: 1 }
        }
        transition={
          hide
            ? {
                opacity: { duration: 0.2, ease: "easeInOut" },
                width: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
              }
            : {
                width: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2, ease: "easeInOut", delay: 0.2 },
              }
        }
        className="flex items-start justify-start h-[90vh] sticky top-0"
      >
        <div className="bg-neutral-950 w-full h-full text-white rounded-lg flex flex-col justify-between">
          <div className="flex flex-col px-4 py-2">
            <div
              onClick={() => setHide(true)}
              className="h-8 w-8 rounded-full flex items-center justify-center bg-neutral-800 opacity-50 hover:opacity-100 transition-opacity duration-200 ease-linear cursor-pointer"
            >
              <ChevronLeft className="text-white size-5" />
            </div>
            <div className="flex flex-col w-full gap-3 mt-4">
              <Button variant="secondary" size="lg">
                Create a Blog
              </Button>
              <Button variant="default" size="lg">
                Previous Blogs
              </Button>
            </div>
          </div>
          <div
            onClick={() => router.back()}
            className="flex items-center gap-1 px-4 py-2 mb-3 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200 ease-linear"
          >
            <ArrowLeft className="size-5 text-white" />
            <span className="text-sm text-white">Go Back</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
