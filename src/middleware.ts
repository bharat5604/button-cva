import { NextResponse } from "next/server";

export default function middleware(req: any) {
  let verify = req.cookies.get("user");
  let url = req.url;
  // console.log("url", url);

  if (!verify && url.includes("admin")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
