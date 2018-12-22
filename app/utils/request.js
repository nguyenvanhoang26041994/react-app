import { Alert } from '../components/core';

export const handleError = (e, response) => {
  // Log or something here

  // display the flash message
  Alert.error({
    message: 'Fetch API error!',
    description: response ? response.message : e.message,
    duration: 2000,
  });

  throw e;
};

export const config = method => (endpoint, options = {}) => {
  const { headers, ...otherOptions } = options;

  return fetch(endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...otherOptions,
  })
    .then(response =>
      response
        .json()
        .then(json => ({
          json,
          response,
        }))
        .catch(e => handleError(e, response)),
    )
    .catch(e => handleError(e));
};

export default Object.freeze({
  get: config('GET'),
  post: config('POST'),
  put: config('PUT'),
  delete: config('DELETE'),
});
