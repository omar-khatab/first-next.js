// here we put the api request or any thing take a time to make the data that don't take a time or that finish its time to show
// firstly and then show data with priority of time to show not like loading.js page that show particular data to show during loading
// this will done with use suspense tag that we will use it in the page.js of postId
export default async function PostDetails ({postId}) {
    // test to make time to see the loading of page
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            next : {
                revalidate: 120
            },
        });
    const post = await response.json()
    return (
    <div>
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
            <hr/>
            <p>{post.body}</p>
        </div>
    </div> 
    )
}