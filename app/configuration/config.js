let host = 'https://blog-microservice-post.herokuapp.com';
//let host = 'http://localhost:5001';

const infiniteLoading = false;

if (process.env.NODE_ENV === 'production') {
    host = '';
}

const api = {
    testimonials : `${host}/testimonial/`,
    post: `${host}/post/`,
    postMostPopular: `${host}/post/mostPopular/`,
    byTitle: `${host}/post/byTitle/`,
    updateTitle: `${host}/post/updateTitle/`,
    updateContent: `${host}/post/updateContent/`,
    updateImage: `${host}/post/updateImage/`,
    increaseViews: `${host}/post/view/`,
};


const httpCall = function httpCall(endPoint, ...args) {
    return endPoint + args.join('/');
}

const isLoadingComplete = function isLoadingComplete(loading) {
    return !loading && !infiniteLoading;
}

const isInfitiveLoading = function isLoadingComplete() {
    return infiniteLoading;
}

export {
    infiniteLoading,
    api,
    httpCall,
    isLoadingComplete,
    isInfitiveLoading
}
