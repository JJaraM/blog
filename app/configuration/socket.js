import { HOST_NAME_POST_SOCKET } from 'configuration/hostname';

const getURL = function(channel) {
    let url = null;
    if ('post' === channel)
        url = `${HOST_NAME_POST_SOCKET}/${channel}`;
    return url;
}

const socket = function(channel) {
    const url = getURL(channel);
    var socket = new WebSocket(url);
    return {
        watchData: function(action) {
            socket.addEventListener('message', function (event) {
                action(JSON.parse(event.data));
            });
        },
    }
}

export {
    socket
}