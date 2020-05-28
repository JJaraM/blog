import { SUCCESS, ERROR  } from 'common/status';


let postWs = 'http://localhost:5001';
let tagWs = 'http://localhost:5003';

const infiniteLoading = false;
const environment = 'production';

const SORT_BY_VIEWS = 0;
const SORT_BY_UPDATE_DATE = 1;


let socket = null;

if (socket == null) {
    socket = new WebSocket('ws://blog-microservice-post.herokuapp.com/ws/profiles');
}

if (environment === 'production') {//process.env.NODE_ENV === 'production'
    tagWs = 'https://blog-microservice-tag.herokuapp.com';
    postWs = 'https://blog-microservice-post.herokuapp.com';
}

const api = {
    testimonials : `${postWs}/testimonial/`,
    post: `${postWs}/post/`,
 
    byTitle: `${postWs}/post/find/byTitle/`,
    updateTitle: `${postWs}/post/updateTitle/`,
    updateContent: `${postWs}/post/updateContent/`,
    updateImage: `${postWs}/post/updateImage/`,
    increaseViews: `${postWs}/post/view/`,

    post_api: {
        tag: {
            add: `${postWs}/post/addTag/`,
            remove: `${postWs}/post/removeTag/`,
        },

        find: {
            all: `${postWs}/post/find/all/`,
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

const canRender = function canRender(status) {
    return status === SUCCESS && !infiniteLoading;
}

const canRenderError = function canRender(status) {
    return status === ERROR;
}

export {
    infiniteLoading,
    api,
    httpCall,
    isLoadingComplete,
    isInfitiveLoading,
    canRender,
    canRenderError,
    
    SORT_BY_VIEWS,
    SORT_BY_UPDATE_DATE,

    socket,
}
