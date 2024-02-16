"use client"

import {Inter} from "next/font/google";
import "./globals.css";
import SidebarWrapper from "@/app/_components/SidebarWrapper";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <SidebarWrapper>
            {children}
        </SidebarWrapper>
        </body>
        </html>
    );
}
