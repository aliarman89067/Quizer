"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = ({ href }: { href: string }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(href)}
      className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center mt-4 cursor-pointer"
    >
      <ChevronLeft className="size-5 text-primary" />
    </div>
  );
};
