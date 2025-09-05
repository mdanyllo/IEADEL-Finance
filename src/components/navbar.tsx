"use client"; 
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function NavBar() {
    return (
        <div className="flex w-full py-1 shadow-md">
            <div className="flex flex-row justify-between items-center m-4 w-full">
            <Link href="/">
            <Image 
                src="/logo.png"
                alt="Logo"
                width={36}
                height={36}
                >
            </Image>
            </Link>

            <Link href="/perfiluser">
            <Image 
                src="/perfil.png"
                alt="Perfil"
                width={40}
                height={40}
                >
            </Image>
            </Link>
            </div>
        </div>
    )
}