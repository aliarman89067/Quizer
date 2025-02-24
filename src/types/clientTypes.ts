import { z } from "zod";

export const UserTypes = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  email: z.string().min(1),
  imageUrl: z.string().min(1),
});
