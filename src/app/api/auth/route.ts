import { prismaClient } from "@/prisma/prisma";
import { UserType } from "@/types/backendTypes";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const parsedBody = UserType.safeParse(body);
    if (!parsedBody.success) {
      return new Response(
        JSON.stringify({ message: "Payload is not correct", success: false }),
        { status: 500 }
      );
    }
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: parsedBody.data.email,
      },
    });
    let user;
    if (existingUser) {
      user = existingUser;
    } else {
      user = await prismaClient.user.create({
        data: parsedBody.data,
      });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string
    );
    await handleToken(token);
    return new Response(
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        imageUrl: user.imageUrl,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", success: false }),
      { status: 500 }
    );
  }
}

const handleToken = async (token: string) => {
  try {
    const expiresTime = 60 * 60 * 24;
    const cookieStore = await cookies();

    cookieStore.set("quizer-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + expiresTime * 1000),
      path: "/",
    });
  } catch (error) {
    throw new Error("Something went wrong while setting the token");
  }
};
