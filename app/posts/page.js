// import link to benefits from move to different pages in the next js
import Link from "next/link";
// here we import the client component inside the server component
import Todo from "../component/todo"
// useEffect to deal with promises and api
// import { useEffect, useState } from "react"
// we make export only and we don't need to import this file in the main page
export default async function Posts () {
    // this is not work as every component in next.js is a server component not client component like in the react
    // and all hooks work with client component only
    // server component : you request from the server to bring this component from it ready (html codes is done in the server)
    // so hooks and rerendering process don't suitable with server component as every rerender you need bring the new value
    // form the server and make request to it,so if you need use the hooks you must make client component
    // any file in the app directory is considered a server component
    // useEffect (() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // }, []);
    // const todo = useState({})
    // here in server component we can fetch data direct not like react we must use useEffect and useState and to do fetch you must
    // handle the function like click to fetch not make side effect inside render of main component as this make infinite 
    // loop of rerendering
    // SSR: server side component that send the request to server and some details the server do it like api request to build the html page
    // SSG(static side generation): skip all this when the data don't change a lot and when you build the project and ready to deployment, the request is done
    // and api is ready to build one html page and this html page don't change with every request you do and this will make the website
    // is faster and the api request with SSG is done previously and deliver to browser by the cdn 
    // the cdn is considered a server but doesn't make the complex calculation and there are many cdn in the world and this cdn
    // take copy from the cache value (final result you get) and return html page direct as is rendered when the project is built
    // ISG (incremental static generation) : combines SSR and SSG, the ISG make request in the first and store it in the cache
    // and this cache have specific period after this period update the data in the case anything changes in the database
    // SSG have a disadvantage that it make one request to server and doesn't make another api request to update the data 
    // as render the page during the building for example if there are website for news the SSG doesn't work right as we need update
    // the data but SSG works with website doesn't change quickly like documentation or portfolio and change it with every build only
    // SSR works inverse SSG and SSG is a default in next.js
    // SSR means every visit the page we make api request to bring the data
    // to use SSR and ISG we add another parameter in the fetch have object
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        { 
            // here from the cache we determine the component is a SSR or SSG
            // this is on the level of component that means the project have combines of SSR and SSG
            // cache: 'force-cache' // the default is force-cache means SSG (don't never change)
            cache: 'no-store', // don't make cache means SSR
            // to use ISG make next object
            next : {
                // means the data maintain 120sec in the cache and then if we make another request, this will bring the update data 
                // by the server. means in the first is a SSG then after 120sec became SSR in this moment
                revalidate : 120
            },
        });
    const posts = await response.json()
    const postsJsx = posts.map((post) => {
        return (
            <Link href={`posts/${post.id}`} style={{width:"70%"}}>
                <div 
                style={{
                    width: "100%",
                    backgroundColor: "black",
                    padding: "10px",
                    borderRadius: "10px",
                    marginTop : "20px",
                    color: "#fff"
                }}
                >
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </Link>
        )
    })
    return (
        <div>
            <h1>This is the new feature in the next js as we don't make import just export</h1>
            <h2>{posts.title}</h2>
            {/* to use the link we must make the link tag and must put href attribute to determine the target page to move to it */}
            <Link href="/Articles">
            <button>Take me to the article page</button>
            <div>
                {/* here this is the client component */}
                <Todo/>
            </div>
            </Link>
            {/* Posts */}
            <div style={{display:"flex", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
                {postsJsx}
            </div>
        </div>
    )
}
