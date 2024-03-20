import {getSession} from "@/lib";
import {NextResponse} from "next/server";

export async function middleware(request) {
    const {pathname} = request.nextUrl;
    const session = await getSession();

    console.log("middleware:", pathname);

    const routes = [
        '/',
        '/news',
        '/products',
        '/catalog',
        '/orders',
        '/brands',
        '/users',
    ]

    if (!session && routes.includes(pathname)) {
        return NextResponse.redirect(
            new URL(
                "/login",
                request.url
            )
        );
    }
}