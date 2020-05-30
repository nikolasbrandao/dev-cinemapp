import api from './api';

export const findByTitle = (title) => {
  return api.get('', {
    params: {
      s: title,
    },
  });
};
