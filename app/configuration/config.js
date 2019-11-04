let host = 'https://blog-microservice-post.herokuapp.com';
const infiniteLoading = false;

if (process.env.NODE_ENV === 'production') {
    host = '';
}

const api = {
    testimonials : `${host}/testimonial/`,
    post: `${host}/post/`,
    postMostPopular: `${host}/post/mostPopular/`,
    byTitle: `${host}/post/byTitle/`
};


const httpCall = function httpCall(endPoint, ...args) {
    return endPoint + args.join('/');
}

const isLoadingComplete = function isLoadingComplete(loading) {
    return !loading && !infiniteLoading;
}

export {
    infiniteLoading,
    api,
    httpCall,
    isLoadingComplete
}
