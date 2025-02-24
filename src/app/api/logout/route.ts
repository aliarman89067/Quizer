import { cookies } from "next/headers";

export async function GET(req: Request, res: Response) {
  try {
    const cookie = await cookies();
    cookie.delete("quizer-token");
    return new Response(
      JSON.stringify({ success: true, message: "Token is removed" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ success: false, message: "Something went wrong" }),
      {
        status: 500,
      }
    );
  }
}
