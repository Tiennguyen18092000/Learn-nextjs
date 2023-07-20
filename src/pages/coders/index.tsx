import React, { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Coder.module.css";

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return{
        props: {coders: data},
    };
};

export default function Allcoder({coders}: {coders: ReactElement}){
    return(
        <>
        <Head>
            <title>Learn Nextjs | All Coders</title>
            <meta name="keywords" content="coders" />
        </Head>
        <div>
            <h1>All Coders</h1>
            {
                coders.map((coders:any) => (
                    <Link href={"/coders/" + coders.id} key = {coders.id}>
                        <h3 className={styles.single}>
                            <p>{coders.name}</p>
                        </h3>
                    </Link>
                ))
            };
        </div>
        </>
    )
}