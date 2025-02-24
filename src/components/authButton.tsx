import { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "../components/ui/button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "@/firebase/firebase";
import axios from "axios";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useUser } from "@/context/store";

interface AuthButtonInterface {
  isloading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthButton = ({
  isloading,
  setIsLoading,
}: AuthButtonInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useUser();

  const handleAuth = async () => {
    setError("");
    if (isloading) return;
    setIsLoading(true);
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const authResult = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = authResult.user;
      if (displayName && email && photoURL) {
        const { data } = await axios.post("/api/auth", {
          name: displayName,
          email,
          imageUrl: photoURL,
        });
        setUser(data);
      } else {
        alert("Something went wrong. Try again later!");
      }
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger disabled={isloading} asChild>
        <Button variant="secondary">Login / Signup</Button>
      </DialogTrigger>
      <DialogContent className="bg-black border-neutral-900">
        <DialogHeader>
          <DialogTitle className="text-white">Login / Signup</DialogTitle>
        </DialogHeader>
        <Button
          disabled={isloading}
          onClick={handleAuth}
          variant="secondary"
          size="lg"
          className="h-12"
        >
          {isloading ? (
            <Loader2 className="size-6 text-primary animate-spin text-center" />
          ) : (
            <>
              Continue With Google
              <Image
                src="/googleIcon.png"
                alt="Google Icon Png"
                width={50}
                height={50}
                className="w-7 h-w-7 object-contain"
              />
            </>
          )}
        </Button>
        {error && (
          <p className="text-red-500 text-center font-medium text-base">
            {error}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};
