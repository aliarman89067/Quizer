import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const cookie = await cookies();
  const token = cookie.get("quizer-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  const apiUrl = new URL("/api/checkUser", req.url).href;
  const reqData = await fetch(apiUrl, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const resData: { success: boolean; message: string } = await reqData.json();
  if (!resData.success) {
    console.log(resData.message);
    cookie.delete("quizer-token");
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: "/create",
};
