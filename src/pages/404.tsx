import React, { use, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Notfound(){
   const router = useRouter()

   useEffect(()=>{
    setTimeout(()=>{
        router.push('/')
    },3000)
   },[])

   return (
    <div className="not-found">
        <h1>Sorry</h1>
        <h2>Bye bye</h2>
        <p>come back to the <Link href="/">Homepage</Link> is 3 sec...</p>
    </div>
)
}

