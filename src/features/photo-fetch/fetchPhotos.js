const apiUrl = `https://api.tumblr.com/v2/blog/sbportfolio/posts/photo?api_key=${process.env.REACT_APP_API_KEY}&npf=true&limit=30`

const extractPostData = (input) => {
    //create a data obj to fill
    let filteredData = {
        entities: {},
        ids: []
    }
    
    class postObj {
        constructor(id, imgUrl, text) {
        this.id = id
        this.imgUrl = imgUrl
        this.text = text
    }}

    // select the posts array
    const posts = input.response.posts

    // create an array with  new object for each post, containing id, image url and caption 
    posts.forEach(post => {
        // get the  unique post ID
        const id = post["id_string"]

        // select the image obj
        const imgObj = post.content.find( obj => obj["type"] === "image" )

        // find the right image within the list of different sizes and get its url
        const URL = imgObj.media.find(obj => obj["has_original_dimensions"] === true).url

        // get the text 
        const text = post.content.find(obj => obj["type"] === "text").text

        // normalize data and put into return obj
        filteredData.entities[id] = new postObj( id, URL, text )
        filteredData.ids.push(id)
    })
    
    return filteredData
}

const fetchPhotos = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const extractedData = extractPostData(data)

    return extractedData

}

export default fetchPhotos