import React, { ReactElement } from "react";
import coders from ".";


export const getStaticPaths = async () => {
   

    const res = await fetch("https://jsonplaceholder.typicode.com/users" );
    const data = await res.json();

    const paths = data.map((coder:any)=>{
        return {
            params: {id: coder.id.toString()},
        };
    });

    return{
        paths,
        fallback:false,
    };
};

export const getStaticProps = async (context: any) => {
        const id = context.params.id;

        const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
        const data = await res.json();
    
        return{
            props: {coders: data},
        };
};

export default function Detail({coders}:{coders:any}){
    return(
        <div>
            <h1>{coders.name}</h1>
                <p>Email:{coders.email}</p>
                <p>Website:{coders.website}</p>
                <p>Address:{coders.address.street}, {coders.address.city}</p>
                <p>Company:{coders.company.name}</p>
        </div>
    );

};