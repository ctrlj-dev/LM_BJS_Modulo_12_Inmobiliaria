import qs from 'qs';

export const history = {
  push: route => {
    window.location.assign(route);
  },
  back: () => {
    window.history.back();
  },
  getParams: () => {
    return qs.parse(window.location.search, { ignoreQueryPrefix: true });
  },
};
