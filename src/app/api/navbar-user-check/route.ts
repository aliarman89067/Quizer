import jwt from "jsonwebtoken";
import { prismaClient } from "@/prisma/prisma";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const cookie = await cookies();
  const token = cookie.get("quizer-token")?.value;
  if (!token) {
    return new Response(
      JSON.stringify({ success: false, message: "Token not found!" }),
      { status: 500 }
    );
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
  const { id, email } = decodedToken as { id: string; email: string };
  const findUser = await prismaClient.user.findUnique({
    where: {
      id,
      email,
    },
  });
  if (!findUser) {
    cookie.delete("quizer-token");
    return new Response(
      JSON.stringify({
        success: false,
        message: "User is not found with this data!",
      }),
      { status: 400 }
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: "Token is valid!",
    }),
    { status: 200 }
  );
}
