import { z } from "zod";

export const UserType = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  imageUrl: z.string().min(1),
});
