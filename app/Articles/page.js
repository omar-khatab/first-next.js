// make meta tag that will show some data on the html page belong to you 
// metadata is mandatory name for meta tag to determine the some data for your page like title of the page and the metadata 
// is an object and we must put export word to benefits from the meta tag and here we use the title
// and this meta tag of title will show for this page only but if we want this title show for all pages inside the article folder
// we should make meta tag inside the layout.js and preferred every page should have its title
export const metadata = {
    title: "article page"
} 
export default function Article () {
    return (
        <div>
            <h1>Article page to move between the pages</h1>
        </div>
    )
}