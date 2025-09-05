"use client"; 
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/navbar";
import MonthSelector from "@/components/monthselector";

import { useState } from "react";


export default function HomeUser() {
    return (
        <div>
            <NavBar />
            <MonthSelector />
        </div>
    )
}