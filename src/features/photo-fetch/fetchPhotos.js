//const key = process.env.REACT_APP_API_KEY;
const key = 'key';
const apiUrl = `https://api.tumblr.com/v2/blog/sbportfolio/posts/photo?api_key=${key}&npf=true&limit=30`;

const extractPostData = (posts) => {

    let resObj = {
        entities: {},
        ids: [],
    }

    posts.forEach(post => {
        const id = post.id_string;
        const entity = {
            url: post.content.find(obj => obj.type === "image").media[0].url,
            text: post.content.find(obj => obj.type === "text").text,
        };

        resObj.entities[id] = entity;
        resObj.ids.push(id);
    });

    return resObj;
};

const fetchPhotos = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const { posts } = data.response;
    const resObj = extractPostData(posts);

    return resObj;
};

export default fetchPhotos;