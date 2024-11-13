// here we make layout shared with all files inside the articles folder and we must put children as this is the pages inside
// the articles folder if we don't put children, this will make all files in the articles folder show nothing
export default function Layoutshared ({children}) {
    return (
        <div>
            <h1>Layout shared with files</h1>
            <div style={{backgroundColor: "blue", margin : "20px", padding : "20px"}}>{children}</div>
        </div>
    )
}