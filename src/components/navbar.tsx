"use client";
import React, { useState } from "react";
import ContentContainer from "./contentContainer";
import { navLinks } from "@/constants/links";
import Link from "next/link";
import { AuthButton } from "./authButton";
import { useUser } from "@/context/store";
import UserButton from "./UserButton";
import { UserTypes } from "@/types/clientTypes";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isloading, setIsLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  return (
    <ContentContainer>
      <div className="flex items-center justify-between w-full py-4">
        <Link href="/" className="w-[200px] text-start">
          <span className="font-semibold text-white text-xl">Quizer</span>
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((item) => (
            <Link key={item.id} href={item.href}>
              <span className="text-base text-white font-extralight">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="w-[200px] flex flex-col items-end">
          {UserTypes.safeParse(user).success ? (
            <div className="flex items-center gap-5">
              <Button
                onClick={() => router.push("/create")}
                asChild
                variant="secondary"
                className="cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <Plus className="size-3 text-primary" />
                  <span className="text-primary font-medium text-base text-center">
                    Create
                  </span>
                  <Plus className="size-3 text-primary" />
                </div>
              </Button>
              <UserButton />
            </div>
          ) : (
            <AuthButton isloading={isloading} setIsLoading={setIsLoading} />
          )}
        </div>
      </div>
    </ContentContainer>
  );
}
