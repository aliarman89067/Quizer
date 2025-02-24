import { Header } from "@/components/home/Header";
import { Button } from "@/components/ui/button";
import ContentContainer from "@/components/contentContainer";
import React from "react";
import Blogs from "@/components/home/Blogs";
import Demo from "@/components/home/Demo";

export default function page() {
  return (
    <ContentContainer classNames="mt-3">
      <div className="flex flex-col">
        <Header />
        <Blogs />
        <Demo />
      </div>
    </ContentContainer>
  );
}
