import { prismaClient } from "@/prisma/prisma";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  const token = req.headers.get("authorization")?.split(" ")[1];
  if (!token || token === "undefined") {
    return new Response(
      JSON.stringify({ success: false, message: "Token not found!" }),
      { status: 400 }
    );
  }
  const decodeToken = jwt.verify(token, process.env.JWT_SECRET as string);
  const { id, email } = decodeToken as { id: string; email: string };
  const checkUser = await prismaClient.user.findUnique({
    where: {
      id,
      email,
    },
  });
  if (!checkUser) {
    return new Response(
      JSON.stringify({ success: false, message: "User not found!" }),
      { status: 400 }
    );
  }
  return new Response(
    JSON.stringify({ success: true, message: "Token is valid!" }),
    { status: 200 }
  );
}
