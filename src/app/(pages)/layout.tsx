import Navbar from "@/components/navbar";
import React from "react";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
