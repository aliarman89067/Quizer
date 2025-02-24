import { useUser } from "@/context/store";
import { UserTypes } from "@/types/clientTypes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import React from "react";
import axios from "axios";

export default function UserButton() {
  const { user, setUser } = useUser();
  if (!UserTypes.safeParse(user).success || !user) return;

  const handleLogout = async () => {
    try {
      const { data } = await axios.get("/api/logout");
      if (data.success) {
        setUser(null);
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later!",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user.imageUrl} />
          <AvatarFallback>{user.name.substring(1)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
