import { ENVIRONMENT } from 'configuration/application';

let HOST_NAME_POST = 'http://localhost:5000';
let HOST_NAME_TAG = 'http://localhost:5001';
let HOST_NAME_POST_SOCKET = 'ws://localhost:5000/ws';

if (ENVIRONMENT === 'production') {
    HOST_NAME_POST = 'https://blog-microservice-api-gateway.herokuapp.com';
    HOST_NAME_TAG = 'https://blog-microservice-tag.herokuapp.com';
    HOST_NAME_POST_SOCKET = 'wss://blog-microservice-post.herokuapp.com/ws';
}

export {
    HOST_NAME_POST,
    HOST_NAME_TAG,
    HOST_NAME_POST_SOCKET,
}
