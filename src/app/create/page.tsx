"use client";
import BlogCreation from "@/components/create/blogCreation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function page() {
  return (
    <Tabs defaultValue="create-blog" className="w-full">
      <TabsList className="flex w-fit mx-auto my-5">
        <TabsTrigger value="create-blog" className="">
          Create Blog
        </TabsTrigger>
        <TabsTrigger value="prev-blog" className="">
          Previous Blog
        </TabsTrigger>
      </TabsList>
      <TabsContent value="create-blog">
        <BlogCreation />
      </TabsContent>
      <TabsContent value="prev-blog"></TabsContent>
    </Tabs>
  );
}
