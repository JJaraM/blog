let host = 'https://blog-microservice-post.herokuapp.com';
const infiniteLoading = false;

if (process.env.NODE_ENV === 'production') {
    host = '';
}

const api = {
    testimonials : `${host}/testimonial/`
};

const httpCall = function httpCall(endPoint, ...args) {
    return endPoint + args.join('/');
}

const isLoading = function isLoading(loading) {
    return !loading && !infiniteLoading;
}

export {
    infiniteLoading,
    api,
    httpCall,
    isLoading
}
