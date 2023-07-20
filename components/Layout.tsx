import React, { Children, ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";



export default function Layout({children}:{ children: ReactElement}){
    return(
        <>
       <div>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
       </div>
       </>
    )
}

