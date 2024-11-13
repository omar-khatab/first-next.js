// here this is called dynamic routing as we make folder and his name must between square brackets and when we called him
// in the website link we can write anything in his place for example if we make this folder inside the article we can write
// /article/x or /article/y or /article/(any name) but if we write name file existed in the same folder will go to this file
// as next js give the priority for the file that called normally rather than file with square brackets
// and the folder with dynamic routing must have page.js file also
// param is the one of the paramter of the function that is considered the path of link the replace of the dynamic routing name
// for example /articles/hello -> here hello is the path of the parameter of the function and can control on it by using it
// inside the page and the component in the next js is made in the server side and make render for it in the server
// this will make the console will show on the terminal and the path parameter will show as value in the object and key is name of
// what inside the square brackets like -> param : {title : name of path}
export default function showDynamicRounting (props) {
    console.log(props)
    return (
        <div>
            <h1>Dynamic Routing</h1>
            {/* this will acess on the path parameter of title */}
            <h1>{props.params.title}</h1>
        </div>
    )
}