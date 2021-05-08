import { call } from 'redux-saga/effects';
import request from 'utils/request';

let data;
let res;
let url;

let okFunction;
let noContentFunction;
let serviceUnavailableFunction;

function* done() {
  res = yield call(fetch, url);

  try {
    if (res.status === 200) {
      data = yield call(request, url);
      yield okFunction(data);
    } else if (res.status === 204) {
      yield noContentFunction();
    } else if (res.status === 503) {
      console.log('Service Unavailable');
      yield serviceUnavailableFunction();
    }
  } catch (e) {
    console.log(e.response);
  }

}

function on() {
  return {
    ok,
    noContent,
    serviceUnavailable,
    done,
  };
}

function noContent(func) {
  noContentFunction = func;
  return {
    on,
    done,
  };
}

function serviceUnavailable(func) {
  serviceUnavailableFunction = func;
  return {
    on,
    done,
  };
}

function ok(func) {
  okFunction = func;
  return {
    on,
    done,
  };
}

function get(requestURL) {
  url = requestURL;
  return {
    on,
  };
};

const http = function() {
  return {
    get,
  };
};

const httpRequest = function httpRequest() {
  function* onOk(fun) {
    if (res.status === 200) {
      yield fun(data);
    }
  }

  function* onNoContent(fun) {
    if (res.status === 204) {
      yield fun(data);
    }
  }

  function* onServiceUnavailable(fun) {
    if (res.status === 503) {
      yield fun(data);
    }
  }

  function* onInternalServerError(fun) {
    if (res.status === 500) {
      yield fun(res);
    }
  }

  function* onCall(requestURL) {
    try {
      res = yield call(fetch, requestURL);
      if (res.status === 200) {
        data = yield call(request, requestURL);
      }
    } catch (e) {
      console.log(e.response);
    }
  }

  return {
    onOk,
    onCall,
    onInternalServerError,
    onNoContent,
    onServiceUnavailable,
  };
};

export { httpRequest, http };
