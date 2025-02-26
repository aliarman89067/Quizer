import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type Editor } from "@tiptap/react";

type UserTypes = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
} | null;

type UseUserTypes = {
  user: UserTypes;
  setUser: (data: UserTypes) => void;
};

export const useUser = create<UseUserTypes>()(
  persist(
    (set) => ({
      user: null,
      setUser: (data) => set({ user: data }),
    }),
    {
      name: "quizer-user-info",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

type UseEditorTypes = {
  editor: Editor | null;
  setEditor: (data: Editor | null) => void;
};

export const useEditor = create<UseEditorTypes>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor: editor }),
}));

type UseInitialContentTypes = {
  initialContent: string;
  setInitialContent: (content: string) => void;
};

export const useInitialContent = create<UseInitialContentTypes>()(
  persist(
    (set) => ({
      initialContent: "",
      setInitialContent: (content) => set({ initialContent: content }),
    }),
    {
      name: "quizer-editor-initial-content",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
