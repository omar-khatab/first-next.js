import PostDetails from "@/app/component/postDetails"
// import of suspense tag
import { Suspense } from "react"
export default async function PostDetailsPage ({params}) {
    const postId = params.postId;
    // make jsx variable to pass it for fallback attribute
    const loadingJSX = (<div><h1>Loading...</h1></div>)
    return (
    <div style={{padding: "20px"}}>
        <h1>Post Details</h1>
        {/* suspense tag to show data direct when its time is taken and this is useful in case of page have many requests
        whenever any request was finished, will show directly and then next request and so on */}
        {/* fallback attribute used in put that will show until what is inside component complete and show and this
        use to make customize loading for a part of page inverse the loading.js that makes customize loading for whole page */}
        <Suspense fallback = {loadingJSX}>
            <PostDetails postId = {postId}/>
        </Suspense>
    </div> 
    )
}