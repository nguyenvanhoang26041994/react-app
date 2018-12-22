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
        .catch(e => {
          throw e;
        }),
    )
    .catch(e => {
      throw e;
    });
};

export default Object.freeze({
  get: config('GET'),
  post: config('POST'),
  put: config('PUT'),
  delete: config('DELETE'),
});
