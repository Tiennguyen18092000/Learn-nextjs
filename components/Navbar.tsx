import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
        <div>
            <Link href = "/">
           Hello
           </Link>
        </div>
        <div>
            <Link href="/about">
           about
           </Link>

           <Link href="/coders"> 
           Allcoder
           </Link>
        </div>
        </nav>
    )
}