"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Image from "next/image";

interface BlogDetailsProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function BlogDetails({ step, setStep }: BlogDetailsProps) {
  const [isLanguageFocus, setIsLanguageFocus] = useState(false);
  const [languages, setLanguages] = useState([
    {
      id: 1,
      name: "Javascript",
    },
    {
      id: 2,
      name: "Python",
    },
    {
      id: 3,
      name: "Java",
    },
    {
      id: 4,
      name: "C++",
    },
    {
      id: 5,
      name: "C",
    },
    {
      id: 6,
      name: "C#",
    },
  ]);
  const [isTopicFocus, setIsTopicFocus] = useState(false);
  const [topics, setTopics] = useState([
    {
      id: 1,
      name: "Loops",
    },
    {
      id: 2,
      name: "Methods",
    },
    {
      id: 3,
      name: "Funtions",
    },
    {
      id: 4,
      name: "Variables",
    },
    {
      id: 5,
      name: "Window",
    },
    {
      id: 6,
      name: "Mapping",
    },
  ]);
  const [savedData, setSavedData] = useState<null | {
    blogTitle: string;
    languages: string;
    topics: string;
  }>(null);

  const DetailFormSchema = z.object({
    blogTitle: z.string().min(1, { message: "Blog title is required!" }),
    languages: z.string().min(1, { message: "Language is required!" }),
    topics: z.string().min(1, { message: "Topic is required!" }),
  });

  type DetailFormSchemaType = z.infer<typeof DetailFormSchema>;

  const form = useForm<DetailFormSchemaType>({
    resolver: zodResolver(DetailFormSchema),
    defaultValues: {
      blogTitle: savedData?.blogTitle || "",
      languages: savedData?.languages || "",
      topics: savedData?.topics || "",
    },
  });

  const { reset } = form;

  useEffect(() => {
    const data = localStorage.getItem("quizer-blog-details");
    if (data) {
      const parsedData = JSON.parse(data) as {
        blogTitle: string;
        languages: string;
        topics: string;
      };
      setSavedData(parsedData);
    } else {
      setSavedData(null);
    }
  }, []);

  useEffect(() => {
    if (savedData) {
      reset({
        blogTitle: savedData.blogTitle || "",
        languages: savedData.languages || "",
        topics: savedData.topics || "",
      });
    }
  }, [savedData, reset]);

  const handleSubmit = async (values: DetailFormSchemaType) => {
    localStorage.setItem(
      "quizer-blog-details",
      JSON.stringify({
        blogTitle: values.blogTitle,
        languages: values.languages,
        topics: values.topics,
      })
    );
    setStep((prev) => (prev += 1));
  };
  return (
    <section className="w-full min-h-[85vh] bg-neutral-950 rounded-lg px-4 py-3 flex flex-col justify-between">
      <div className="flex flex-col gap-2 max-w-lg">
        <Form {...form}>
          <form className="space-y-5">
            <FormField
              control={form.control}
              name="blogTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Title</FormLabel>
                  <FormDescription>
                    This is your Blog title name.
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Blog Title"
                      {...field}
                      className="bg-neutral-950 border border-gray-500 hover:border-white focus-within:border-white outline-none text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="languages"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Language</FormLabel>
                  <FormDescription>
                    Select your target programming language.
                  </FormDescription>
                  <FormControl className="relative w-full">
                    <div className="w-full">
                      <Input
                        readOnly
                        onFocus={() => setIsLanguageFocus(true)}
                        onBlur={() => {
                          setTimeout(() => {
                            setIsLanguageFocus(false);
                          }, 100);
                        }}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Language"
                        className="bg-transparent border border-gray-500 hover:border-white focus-within:border-white outline-none text-white"
                      />
                      {isLanguageFocus && (
                        <div className="z-10 absolute top-10 w-full h-[200px] px-2.5 py-2 rounded-lg bg-white flex flex-col gap-2 overflow-y-scroll custom-scrollbar2">
                          {languages.map((lang) => (
                            <div
                              key={lang.id}
                              onClick={() => onChange(lang.name)}
                              className="w-full px-4 py-1.5 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out flex items-center gap-2"
                            >
                              <span className="text-primary text-sm">
                                {lang.name}
                              </span>
                              <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"
                                alt="Language Icon"
                                width={30}
                                height={30}
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="topics"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Topic</FormLabel>
                  <FormDescription>Select your target Topic.</FormDescription>
                  <FormControl className="relative w-full">
                    <div className="w-full">
                      <Input
                        readOnly
                        onFocus={() => setIsTopicFocus(true)}
                        onBlur={() => {
                          setTimeout(() => {
                            setIsTopicFocus(false);
                          }, 100);
                        }}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Topic"
                        className="bg-transparent border border-gray-500 hover:border-white focus-within:border-white outline-none text-white"
                      />
                      {isTopicFocus && (
                        <div className="z-10 absolute top-10 w-full h-[200px] px-2.5 py-2 rounded-lg bg-white flex flex-col gap-2 overflow-y-scroll custom-scrollbar2">
                          {topics.map((lang) => (
                            <div
                              key={lang.id}
                              onClick={() => onChange(lang.name)}
                              className="w-full px-4 py-1.5 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out flex items-center gap-2"
                            >
                              <span className="text-primary text-sm">
                                {lang.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <div className="space-x-4 ml-2 flex items-center justify-center">
        <Button
          disabled={step === 0}
          onClick={() => setStep((prev) => (prev -= 1))}
          variant="secondary"
          size="lg"
        >
          Prev
        </Button>
        <Button
          disabled={step === 2}
          onClick={form.handleSubmit(handleSubmit)}
          variant="secondary"
          size="lg"
        >
          Next
        </Button>
      </div>
    </section>
  );
}
