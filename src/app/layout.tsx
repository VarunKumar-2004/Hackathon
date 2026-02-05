import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
    title: "PyTech Arena 2026",
    description: "Code. Compute. Create. Join the biggest hackathon at JNTU-GV Department of IT.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${outfit.variable} ${spaceGrotesk.variable} min-h-screen bg-[#020617] text-white selection:bg-purple-500/30`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
