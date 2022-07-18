import { SUCCESS, ERROR } from 'common/status';
import { HOST_NAME_POST, HOST_NAME_TAG } from 'configuration/hostname';

const infiniteLoading = !!(
  localStorage.getItem('infiniteLoading') && localStorage.getItem('infiniteLoading') === 'true'
);
const SORT_BY_VIEWS = 0;
const SORT_BY_UPDATE_DATE = 1;
const DELAY_TIME = 30000;
const MAX_RETRIES = 5;

const api = {
  paths: {
    postPage: '/post/',
  },
  testimonials: `${HOST_NAME_POST}/v1/testimonial/`,
  post: `${HOST_NAME_POST}/post/`,
  byTitle: `${HOST_NAME_POST}/post/find/all/byTitle/`,
  updateTitle: `${HOST_NAME_POST}/post/updateTitle/`,
  updateContent: `${HOST_NAME_POST}/post/updateContent/`,
  updateImage: `${HOST_NAME_POST}/post/updateImage/`,
  increaseViews: `${HOST_NAME_POST}/post/view/`,

  post_api: {
    tag: {
      add: `${HOST_NAME_POST}/post/addTag/`,
      remove: `${HOST_NAME_POST}/post/removeTag/`,
    },

    find: {
      all: `${HOST_NAME_POST}/post/find/all/`,
    },
  },

  tag: {
    create: `${HOST_NAME_TAG}/tag/`,
    all: `${HOST_NAME_TAG}/tag/all/`,
  },

  console: {
    log: {
      all: true,
    },
  },
};

const log = function log(message, key) {
  if (api.console.log) {
    console.log(message);
  }
};

const httpCall = function httpCall(endPoint, ...args) {
  return endPoint + args.join('/');
};

const isLoadingComplete = function isLoadingComplete(loading) {
  return !loading && !infiniteLoading;
};

const isInfitiveLoading = function isLoadingComplete() {
  return infiniteLoading;
};

const canRender = function canRender(status) {
  return status === SUCCESS && !infiniteLoading;
};

const canRenderError = function canRender(status) {
  return status === ERROR;
};

const logError = function logError(message) {
  console.log(message);
};

export {
  infiniteLoading,
  api,
  httpCall,
  isLoadingComplete,
  isInfitiveLoading,
  canRender,
  canRenderError,
  logError,
  log,
  SORT_BY_VIEWS,
  SORT_BY_UPDATE_DATE,
  DELAY_TIME,
  MAX_RETRIES,
};
