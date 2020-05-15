
let postWs = 'http://localhost:5001';
let tagWs = 'http://localhost:5003';

const infiniteLoading = false;
const environment = 'production';

if (environment === 'production') {//process.env.NODE_ENV === 'production'
    tagWs = 'https://blog-microservice-tag.herokuapp.com';
    postWs = 'https://blog-microservice-post.herokuapp.com';
}

const api = {
    testimonials : `${postWs}/testimonial/`,
    post: `${postWs}/post/`,
    postMostPopular: `${postWs}/post/mostPopular/`,
    byTitle: `${postWs}/post/byTitle/`,
    updateTitle: `${postWs}/post/updateTitle/`,
    updateContent: `${postWs}/post/updateContent/`,
    updateImage: `${postWs}/post/updateImage/`,
    increaseViews: `${postWs}/post/view/`,

    post_api: {
        tag: {
            add: `${postWs}/post/addTag/`,
            remove: `${postWs}/post/removeTag/`,
        }
    },

    tag: {
        create: `${tagWs}/tag/`,
        all: `${tagWs}/tag/all/`,
    }
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
